const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const errorHandler = require('./middlewares/errorhandler.middleware');

// Import routes
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const recipeRoutes = require('./routes/recipe.routes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors({ origin: 'http://localhost:3001', credentials: true }));
app.use(express.json());

// Routes
app.get('/', (req, res) => res.send('Welcome to RECIPEDIA'));
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/recipes', recipeRoutes);

// Error handler
app.use(errorHandler);

// Connect DB & Start Server

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('DB Connection Error:', err));
