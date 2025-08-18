const Recipe = require('../models/Recipe');
const asyncHandler = require('../utils/asynchandler');


exports.getAllRecipes = asyncHandler(async (req, res) => {
  const recipes = await Recipe.find().populate('userId', 'username');
  res.status(200).json(recipes);
});


exports.getRecipeById = asyncHandler(async (req, res) => {
  const recipe = await Recipe.findById(req.params.id)
    .populate('userId', 'username')
    .populate('comments.user', 'username');

  if (!recipe) {
    return res.status(404).json({ message: 'Recipe not found' });
  }

  res.status(200).json(recipe);
});


exports.createRecipe = asyncHandler(async (req, res) => {
  const { title, description, ingredients, image } = req.body;

  const recipe = new Recipe({
    title,
    description,
    ingredients,
    image,
    userId: req.user.userId,
  });

  await recipe.save();

  res.status(201).json({
    message: 'Recipe added successfully',
    recipe,
  });
});


exports.updateRecipe = asyncHandler(async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);

  if (!recipe) {
    return res.status(404).json({ message: 'Recipe not found' });
  }

  if (recipe.userId.toString() !== req.user.userId) {
    return res.status(403).json({ message: 'Access denied' });
  }

  const updatedRecipe = await Recipe.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );

  res.status(200).json({
    message: 'Recipe updated successfully',
    recipe: updatedRecipe,
  });
});

exports.deleteRecipe = asyncHandler(async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);

  if (!recipe) {
    return res.status(404).json({ message: 'Recipe not found' });
  }

  if (recipe.userId.toString() !== req.user.userId) {
    return res.status(403).json({ message: 'Access denied' });
  }

  await Recipe.findByIdAndDelete(req.params.id);

  res.status(200).json({ message: 'Recipe deleted successfully' });
});

exports.likeRecipe = asyncHandler(async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);

  if (!recipe) {
    return res.status(404).json({ message: 'Recipe not found' });
  }

  recipe.likes += 1;
  await recipe.save();

  res.status(200).json({
    message: 'Recipe liked',
    likes: recipe.likes,
  });
});
