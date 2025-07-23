import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaEdit, FaHeart, FaComment } from 'react-icons/fa';
import './AddRecipe.css';

const AddRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [newRecipe, setNewRecipe] = useState({
    title: "",
    description: "",
    ingredients: "",
    image: "",
  });
  const [editingRecipe, setEditingRecipe] = useState(null);

  // API base URL
  const API_BASE_URL = 'http://localhost:3000';

  // Get current user ID (you might want to get this from context/auth)
  const getCurrentUserId = () => {
    // For now, using a dummy user ID. Replace with actual authentication
    return "60d5ecb74b24c73d5c8f1234"; // Replace with real user ID from auth
  };

  // Fetch all recipes
  const fetchRecipes = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/recipes`);
      if (!response.ok) throw new Error('Failed to fetch recipes');
      const data = await response.json();
      setRecipes(data);
    } catch (err) {
      setError('Error fetching recipes: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Load recipes on component mount
  useEffect(() => {
    fetchRecipes();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  };

  // Add or Update Recipe
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const recipeData = {
        ...newRecipe,
        ingredients: newRecipe.ingredients.split(',').map(item => item.trim()),
        userId: getCurrentUserId()
      };

      if (editingRecipe) {
        // Update existing recipe
        const response = await fetch(`${API_BASE_URL}/recipes/${editingRecipe._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(recipeData)
        });

        if (!response.ok) throw new Error('Failed to update recipe');
        
        const updatedRecipe = await response.json();
        setRecipes(recipes.map(recipe => 
          recipe._id === editingRecipe._id ? updatedRecipe.recipe : recipe
        ));
        setEditingRecipe(null);
      } else {
        // Add new recipe
        const response = await fetch(`${API_BASE_URL}/recipes`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(recipeData)
        });

        if (!response.ok) throw new Error('Failed to add recipe');
        
        const result = await response.json();
        setRecipes([...recipes, result.recipe]);
      }

      // Reset form
      setNewRecipe({ title: "", description: "", ingredients: "", image: "" });
      setError('');
    } catch (err) {
      setError('Error saving recipe: ' + err.message);
    }
  };

  // Edit Recipe
  const handleEdit = (recipe) => {
    setNewRecipe({
      title: recipe.title,
      description: recipe.description,
      ingredients: recipe.ingredients.join(', '),
      image: recipe.image
    });
    setEditingRecipe(recipe);
  };

  // Delete Recipe
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this recipe?')) return;
    
    try {
      const response = await fetch(`${API_BASE_URL}/recipes/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) throw new Error('Failed to delete recipe');
      
      setRecipes(recipes.filter(recipe => recipe._id !== id));
    } catch (err) {
      setError('Error deleting recipe: ' + err.message);
    }
  };

  // Like Recipe
  const handleLike = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/recipes/${id}/like`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) throw new Error('Failed to like recipe');
      
      const result = await response.json();
      setRecipes(recipes.map(recipe => 
        recipe._id === id ? { ...recipe, likes: result.likes } : recipe
      ));
    } catch (err) {
      setError('Error liking recipe: ' + err.message);
    }
  };

  // Add Comment
  const handleAddComment = async (recipeId, commentText) => {
    if (!commentText.trim()) return;
    
    try {
      const response = await fetch(`${API_BASE_URL}/recipes/${recipeId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: getCurrentUserId(),
          text: commentText
        })
      });

      if (!response.ok) throw new Error('Failed to add comment');
      
      const result = await response.json();
      setRecipes(recipes.map(recipe => 
        recipe._id === recipeId ? result.recipe : recipe
      ));
    } catch (err) {
      setError('Error adding comment: ' + err.message);
    }
  };

  if (loading) return <div className="loading">Loading recipes...</div>;

  return (
    <div className="recipe-container">
      {/* Back to Home */}
      <Link to="/home" className="back-button">← Back to Home</Link>

      {/* Error Display */}
      {error && <div className="error-message">{error}</div>}

      {/* Recipe Form */}
      <div className="recipe-form">
        <h2>{editingRecipe ? "Edit Recipe" : "Add New Recipe"}</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="title" 
            placeholder="Recipe Title" 
            value={newRecipe.title} 
            onChange={handleChange} 
            required 
          />
          <textarea 
            name="description" 
            placeholder="Description" 
            value={newRecipe.description} 
            onChange={handleChange} 
            required
          />
          <input 
            type="text" 
            name="ingredients" 
            placeholder="Ingredients (comma separated)" 
            value={newRecipe.ingredients} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="image" 
            placeholder="Image URL" 
            value={newRecipe.image} 
            onChange={handleChange} 
            required 
          />
          <button type="submit">
            {editingRecipe ? "Update Recipe" : "Add Recipe"}
          </button>
          {editingRecipe && (
            <button 
              type="button" 
              onClick={() => {
                setEditingRecipe(null);
                setNewRecipe({ title: "", description: "", ingredients: "", image: "" });
              }}
            >
              Cancel
            </button>
          )}
        </form>
      </div>

      {/* Recipe List */}
      <div className="recipe-list">
        <h2>All Recipes</h2>
        {recipes.length === 0 ? (
          <p>No recipes found.</p>
        ) : (
          recipes.map((recipe) => (
            <RecipeCard 
              key={recipe._id} 
              recipe={recipe} 
              onEdit={handleEdit}
              onDelete={handleDelete}
              onLike={handleLike}
              onAddComment={handleAddComment}
            />
          ))
        )}
      </div>
    </div>
  );
};

// Separate Recipe Card Component
const RecipeCard = ({ recipe, onEdit, onDelete, onLike, onAddComment }) => {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    onAddComment(recipe._id, newComment);
    setNewComment('');
  };

  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} onError={(e) => {
        e.target.src = '/placeholder-recipe.jpg'; // Fallback image
      }} />
      <div className="recipe-info">
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
        <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
        
        <div className="recipe-actions">
          <button onClick={() => onEdit(recipe)}>
            <FaEdit /> Edit
          </button>
          <button onClick={() => onDelete(recipe._id)} className="delete">
            <FaTrash /> Delete
          </button>
        </div>
        
        <div className="recipe-meta">
          <button 
            className="like-button" 
            onClick={() => onLike(recipe._id)}
          >
            <FaHeart /> {recipe.likes || 0}
          </button>
          <button 
            className="comment-button"
            onClick={() => setShowComments(!showComments)}
          >
            <FaComment /> {recipe.comments?.length || 0} Comments
          </button>
        </div>

        {showComments && (
          <div className="comments-section">
            <div className="comments-list">
              {recipe.comments?.map((comment, index) => (
                <div key={index} className="comment">
                  <p>{comment.text}</p>
                  <small>
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </small>
                </div>
              ))}
            </div>
            
            <form onSubmit={handleCommentSubmit} className="comment-form">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                required
              />
              <button type="submit">Post</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddRecipe;