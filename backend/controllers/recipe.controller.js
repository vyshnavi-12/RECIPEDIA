const Recipe = require('../models/Recipe');

exports.getAllRecipes = async (req, res) => {
  const recipes = await Recipe.find().populate('userId', 'username');
  res.json(recipes);
};

exports.getRecipeById = async (req, res) => {
  const recipe = await Recipe.findById(req.params.id).populate('userId', 'username').populate('comments.user', 'username');
  if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
  res.json(recipe);
};

exports.createRecipe = async (req, res) => {
  const { title, description, ingredients, image } = req.body;
  const recipe = new Recipe({ title, description, ingredients, image, userId: req.user.userId });
  await recipe.save();
  res.status(201).json({ message: 'Recipe added successfully', recipe });
};

exports.updateRecipe = async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  if (!recipe) return res.status(404).json({ message: 'Recipe not found' });

  if (recipe.userId.toString() !== req.user.userId) return res.status(403).json({ message: 'Access denied' });

  const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
  res.json({ message: 'Recipe updated successfully', recipe: updatedRecipe });
};

exports.deleteRecipe = async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  if (!recipe) return res.status(404).json({ message: 'Recipe not found' });

  if (recipe.userId.toString() !== req.user.userId) return res.status(403).json({ message: 'Access denied' });

  await Recipe.findByIdAndDelete(req.params.id);
  res.json({ message: 'Recipe deleted successfully' });
};

exports.likeRecipe = async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  if (!recipe) return res.status(404).json({ message: 'Recipe not found' });

  recipe.likes += 1;
  await recipe.save();
  res.json({ message: 'Recipe liked', likes: recipe.likes });
};
