const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
require('dotenv').config();
const User = require('./models/User');
const Recipe = require('./models/Recipe');
const cors = require('cors');

const app = express();
const port = 5000;


const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

app.use(express.json());
app.use(cors());

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));


// Home
app.get('/', (req, res) => {
    res.send('Welcome to RECIPEDIA');
});

// Register
app.post('/register', async (req, res) => {
    const { username, email, password, age, gender, address, phone } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ 
            username, 
            email, 
            password: hashedPassword,
            age,
            gender,
            address,
            phone
        });
        await user.save();
        res.json({ message: 'User registered successfully.' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error registering user' });
    }
});

// Login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }
        res.json({ message: 'Login Successful', username: user.username });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Login error' });
    }
});


app.post('/auth/google', async (req, res) => {
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
                password: 'google-auth', 
                age: 0, 
                gender: '',
                address: '',
                phone: ''
            });
            await user.save();
        }
        
       
        const jwtToken = jwt.sign(
            { 
                userId: user._id, 
                username: user.username, 
                email: user.email 
            },
            'your-secret-key', 
            { expiresIn: '24h' }
        );
        
        res.json({ 
            message: 'Google login successful',
            username: user.username,
            email: user.email,
            token: jwtToken
        });
        
    } catch (error) {
        console.error('Google authentication error:', error);
        res.status(401).json({ message: 'Invalid Google token' });
    }
});

// Get user profile
app.get('/profile/:email', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.params.email })
            .populate('favoriteRecipe')
            .populate('likedRecipes')
            .populate('savedRecipes')
            .populate('recentComments.recipe');
            
        if (!user) return res.status(404).json({ message: 'User not found' });
        
        res.json({
            username: user.username,
            email: user.email,
            avatar: user.avatar,
            bio: user.bio,
            favoriteCuisines: user.favoriteCuisines,
            dietaryPreferences: user.dietaryPreferences,
            favoriteRecipe: user.favoriteRecipe,
            likedRecipes: user.likedRecipes,
            savedRecipes: user.savedRecipes,
            recentComments: user.recentComments
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error fetching profile' });
    }
});

// Get all registered users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find({}, {
            username: 1,
            email: 1,
            avatar: 1,
            bio: 1,
            favoriteCuisines: 1,
            dietaryPreferences: 1
        });
        res.json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error fetching users' });
    }
});


// Update user profile
app.put('/update/:email', async (req, res) => {
    try {
        const {
            username,
            password,
            avatar,
            bio,
            favoriteCuisines,
            dietaryPreferences,
            favoriteRecipe
        } = req.body;

        const updateData = {
            username,
            avatar,
            bio,
            favoriteCuisines,
            dietaryPreferences,
            favoriteRecipe
        };

        if (password) {
            updateData.password = await bcrypt.hash(password, 10);
        }
        
        const user = await User.findOneAndUpdate(
            { email: req.params.email },
            { $set: updateData },
            { new: true }
        );
        
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'Profile updated successfully', user });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error updating profile' });
    }
});

// Delete user account
app.delete('/delete/:email', async (req, res) => {
    try {
        const user = await User.findOneAndDelete({ email: req.params.email });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'Account deleted successfully' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error deleting account' });
    }
});

// Add recipe
app.post('/recipes', async (req, res) => {
    const { title, description, ingredients, image, userId } = req.body;
    try {
        const recipe = new Recipe({ 
            title, 
            description, 
            ingredients, 
            image, 
            userId 
        });
        await recipe.save();
        res.json({ message: 'Recipe added successfully', recipe });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error adding recipe' });
    }
});

// Add comment to recipe
app.post('/recipes/:id/comments', async (req, res) => {
    const { userId, text } = req.body;
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
        
        recipe.comments.push({ user: userId, text });
        await recipe.save();
        res.json({ message: 'Comment added successfully', recipe });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error adding comment' });
    }
});

// Like recipe
app.post('/recipes/:id/like', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        recipe.likes += 1;
        await recipe.save();

        res.json({ message: 'Recipe liked successfully', likes: recipe.likes });
    } catch (err) {
        console.error("Error liking recipe:", err);
        res.status(500).json({ message: 'Error liking recipe', error: err.message });
    }
});
// Get all recipes
app.get('/recipes', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error fetching recipes' });
    }
});

// Get recipe by ID
app.get('/recipes/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
        res.json(recipe);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error fetching recipe' });
    }
});

// Update recipe
app.put('/recipes/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
        res.json({ message: 'Recipe updated successfully', recipe });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error updating recipe' });
    }
});

// Delete recipe
app.delete('/recipes/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
        res.json({ message: 'Recipe deleted successfully' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error deleting recipe' });
    }
});



mongoose.connect("mongodb+srv://meghanadgaonkar04:meghana04@cluster0.n77cs.mongodb.net/recipedia2004?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log('DB Connected Successfully'))
    .catch(err => console.log(err));

app.listen(5000, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is running on port ${port}`);
});