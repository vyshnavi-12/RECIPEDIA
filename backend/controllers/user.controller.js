const User = require('../models/User');
const bcrypt = require('bcryptjs');
const asyncHandler = require('../utils/asynchandler');

exports.getProfile = asyncHandler(async (req, res) => {
  if (req.user.email !== req.params.email) {
    return res.status(403).json({ message: 'Access denied' });
  }

  const user = await User.findOne({ email: req.params.email })
    .populate('favoriteRecipe likedRecipes savedRecipes recentComments.recipe')
    .select('-password');

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.status(200).json(user);
});


exports.updateProfile = asyncHandler(async (req, res) => {
  if (req.user.email !== req.params.email) {
    return res.status(403).json({ message: 'Access denied' });
  }

  const updateData = req.body;

  if (updateData.password) {
    if (updateData.password.length < 6) {
      return res.status(400).json({ message: 'Password too short' });
    }
    updateData.password = await bcrypt.hash(updateData.password, 12);
  }

  const user = await User.findOneAndUpdate(
    { email: req.params.email },
    { $set: updateData },
    { new: true }
  ).select('-password');

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.status(200).json({ message: 'Profile updated successfully', user });
});

exports.deleteAccount = asyncHandler(async (req, res) => {
  if (req.user.email !== req.params.email) {
    return res.status(403).json({ message: 'Access denied' });
  }

  const deletedUser = await User.findOneAndDelete({ email: req.params.email });

  if (!deletedUser) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.status(200).json({ message: 'Account deleted successfully' });
});
