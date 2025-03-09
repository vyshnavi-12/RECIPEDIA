import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaEdit, FaHeart, FaComment } from 'react-icons/fa';
import './AddRecipe.css';

const AddRecipe = () => {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: "Spaghetti Carbonara",
      description: "A classic Italian pasta dish with creamy sauce.",
      ingredients: ["Pasta", "Eggs", "Parmesan", "Bacon"],
      image: "/spagati.jpg",
      likes: 25,
      comments: ["Delicious!", "I tried this, amazing!", "More sauce next time?"]
    },
    {
      id: 2,
      title: "Avocado Toast",
      description: "Simple yet delicious toast with smashed avocado.",
      ingredients: ["Bread", "Avocado", "Salt", "Pepper"],
      image: "/avacardo.jpg",
      likes: 18,
      comments: ["Healthy choice!", "Perfect breakfast!"]
    }
  ]);

  const [newRecipe, setNewRecipe] = useState({
    title: "",
    description: "",
    ingredients: "",
    image: "",
  });

  const [editingRecipe, setEditingRecipe] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  };

  // Add or Update Recipe
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingRecipe) {
      setRecipes(
        recipes.map((recipe) =>
          recipe.id === editingRecipe.id ? { ...recipe, ...newRecipe } : recipe
        )
      );
      setEditingRecipe(null);
    } else {
      setRecipes([...recipes, { ...newRecipe, id: Date.now(), likes: 0, comments: [] }]);
    }
    setNewRecipe({ title: "", description: "", ingredients: "", image: "" });
  };

  // Edit Recipe
  const handleEdit = (recipe) => {
    setNewRecipe(recipe);
    setEditingRecipe(recipe);
  };

  // Delete Recipe
  const handleDelete = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <div className="recipe-container">
      {/* Back to Home */}
      <Link to="/home" className="back-button">← Back to Home</Link>

      {/* Recipe Form */}
      <div className="recipe-form">
        <h2>{editingRecipe ? "Edit Recipe" : "Add New Recipe"}</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Recipe Title" value={newRecipe.title} onChange={handleChange} required />
          <textarea name="description" placeholder="Description" value={newRecipe.description} onChange={handleChange} required></textarea>
          <input type="text" name="ingredients" placeholder="Ingredients (comma separated)" value={newRecipe.ingredients} onChange={handleChange} required />
          <input type="text" name="image" placeholder="Image URL" value={newRecipe.image} onChange={handleChange} required />
          <button type="submit">{editingRecipe ? "Update Recipe" : "Add Recipe"}</button>
        </form>
      </div>

      {/* Recipe List */}
      <div className="recipe-list">
        <h2>My Recipes</h2>
        {recipes.length === 0 ? <p>No recipes added yet.</p> : (
          recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.image} alt={recipe.title} />
              <div className="recipe-info">
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
                <div className="recipe-actions">
                  <button onClick={() => handleEdit(recipe)}><FaEdit /> Edit</button>
                  <button onClick={() => handleDelete(recipe.id)} className="delete"><FaTrash /> Delete</button>
                </div>
                <div className="recipe-meta">
                  <span><FaHeart /> {recipe.likes}</span>
                  <span><FaComment /> {recipe.comments.length} Comments</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AddRecipe;
