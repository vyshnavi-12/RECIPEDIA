const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    // Add the missing required fields from registration
    age: {
        type: Number,
        required: true,
        min: 1,
        max: 120
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female', 'other', 'prefer-not-to-say']
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    // Optional profile fields
    avatar: {
        type: String,
        default: ''
    },
    bio: {
        type: String,
        trim: true,
        default: ''
    },
    favoriteCuisines: [{
        type: String,
        trim: true
    }],
    dietaryPreferences: [{
        type: String,
        trim: true
    }],
    favoriteRecipe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe'
    },
    likedRecipes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe'
    }],
    savedRecipes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe'
    }],
    recentComments: [{
        recipe: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Recipe'
        },
        text: String,
        createdAt: {
            type: Date,
            default: Date.now
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);