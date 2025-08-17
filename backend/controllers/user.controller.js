const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.getProfile = async (req, res) => {
  try {
    if (req.user.email !== req.params.email) return res.status(403).json({ message: 'Access denied' });

    const user = await User.findOne({ email: req.params.email })
      .populate('favoriteRecipe likedRecipes savedRecipes recentComments.recipe')
      .select('-password');

    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching profile', error: err.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    if (req.user.email !== req.params.email) return res.status(403).json({ message: 'Access denied' });

    const updateData = req.body;

    if (updateData.password) {
      if (updateData.password.length < 6)
        return res.status(400).json({ message: 'Password too short' });

      updateData.password = await bcrypt.hash(updateData.password, 12);
    }

    const user = await User.findOneAndUpdate({ email: req.params.email }, { $set: updateData }, { new: true }).select('-password');

    res.json({ message: 'Profile updated', user });
  } catch (err) {
    res.status(500).json({ message: 'Error updating profile', error: err.message });
  }
};

exports.deleteAccount = async (req, res) => {
  try {
    if (req.user.email !== req.params.email) return res.status(403).json({ message: 'Access denied' });

    await User.findOneAndDelete({ email: req.params.email });
    res.json({ message: 'Account deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting account', error: err.message });
  }
};
