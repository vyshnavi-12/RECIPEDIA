const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const asyncHandler = require('../utils/asynchandler'); // wraps async functions

exports.register = asyncHandler(async (req, res, next) => {
  const { username, email, password, age, gender, address, phone } = req.body;

  if (!username || !email || !password || !age || !gender || !address || !phone) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(409).json({ message: 'Email already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
    age,
    gender,
    address,
    phone,
  });

  const token = jwt.sign(
    { userId: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );

  res.status(201).json({
    message: 'User registered successfully',
    token,
    user,
  });
});


exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required' });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign(
    { userId: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );

  res.status(200).json({
    message: 'Login successful',
    token,
    user,
  });
});
