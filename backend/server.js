// server.js
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
require("dotenv").config();
const cors = require("cors");

const User = require("./models/User");
const Recipe = require("./models/Recipe");
const Like = require("./models/Like");
const trendingJob = require("./cron/trendingJob");

const app = express();
const port = 5000;

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const port = process.env.PORT || 30

app.us
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(cors({
  origin: "http://localhost:3001",
  credentials: true
}));

// JWT middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Access token required" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid or expired token" });
    req.user = user;
    next();
  });
};

// Home
app.get("/", (req, res) => {
  res.send("Welcome to RECIPEDIA");
});

// Register
app.post("/register", async (req, res) => {
  const { username, email, password, age, gender, address, phone } = req.body;

  try {
    if (!username || !email || !password || !age || !gender || !address || !phone) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Please enter a valid email address" });
    }

    if (isNaN(age) || age < 1 || age > 120) {
      return res.status(400).json({ message: "Please enter a valid age between 1 and 120" });
    }

    const validGenders = ["male", "female", "other", "prefer-not-to-say"];
    if (!validGenders.includes(gender)) {
      return res.status(400).json({ message: "Please select a valid gender option" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }

    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists with this email" });
    }

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ message: "Username is already taken" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({
      username: username.trim(),
      email: email.toLowerCase().trim(),
      password: hashedPassword,
      age: parseInt(age),
      gender,
      address: address.trim(),
      phone: phone.trim(),
    });

    await user.save();

    const token = jwt.sign(
      { user: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ message: "Error registering user" });
  }
});

// Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) return res.status(400).json({ message: "Email and password are required" });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return res.status(400).json({ message: "Please enter a valid email address" });

    const user = await User.findOne({ email: email.toLowerCase().trim() });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { user: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Login error" });
  }
});

// Google Auth
app.post("/auth/google", async (req, res) => {
  const { idToken } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: idToken,
      audience: process.env.GOOGLE_CLIENT_ID
    });

    const payload = ticket.getPayload();
    const { sub: googleId, email, name, picture } = payload;

    let user = await User.findOne({ email: email });

    if (!user) {
      user = new User({
        username: name,
        email: email,
        googleId: googleId,
        avatar: picture,
        password: "google-auth",
        age: 0,
        gender: "",
        address: "",
        phone: ""
      });
      await user.save();
    }

    const jwtToken = jwt.sign(
      { userId: user._id, username: user.username, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.json({
      message: "Google login successful",
      username: user.username,
      email: user.email,
      token: jwtToken
    });
  } catch (error) {
    console.error("Google authentication error:", error);
    res.status(401).json({ message: "Invalid Google token" });
  }
});

// Start DB & Server
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB Connected Successfully");
    trendingJob.start();
  })
  .catch((err) => console.log("DB Connection Error:", err));

app.listen(port, (err) => {
  if (err) {
    return console.log("Something bad happened", err);
  }
  console.log(`Server is running on port ${port}`);
});
