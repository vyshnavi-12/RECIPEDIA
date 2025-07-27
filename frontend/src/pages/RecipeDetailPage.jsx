import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaHeart, FaRegHeart } from 'react-icons/fa';
import allRecipes from '../data/recipes.json';
import NotFoundPage from './NotFound.jsx'; // Updated import
import '../styles/RecipeDetail.css';
import { v4 as uuidv4 } from 'uuid';

const RecipeDetailPage = () => {
  const { category, recipeId } = useParams();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState(null);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [error, setError] = useState("")

  useEffect(() => {
    const foundRecipe = allRecipes.find(r => r.id === recipeId && r.category === category);
    setRecipe(foundRecipe);
  }, [recipeId, category]);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleComment = (e) => {
    e.preventDefault();
    const username = localStorage.getItem('username') || 'Guest';
    if (!newComment.trim()) {
      setError("Comment cannot be empty!")
      return
    }
    setComments([...comments, { id: uuidv4(), text: newComment, user: username }]);
    setNewComment('');
    setError("")
  };

  if (!recipe) {
    return <NotFoundPage />;
  }

  return (
    <div className="recipe-detail-container max-w-4xl mx-auto px-4 pt-32 pb-16 dark:bg-slate-800 dark:text-white">
      <button onClick={() => navigate(`/${recipe.category}`)} className="back-button flex items-center !text-red-500 hover:text-red-600 mb-6 dark:!text-white text-xl">
        <FaArrowLeft className="mr-2" /> Back to {recipe.category}
      </button>

      <h1 className="text-4xl font-bold text-center my-10">{recipe.name}</h1>

      <img src={recipe.image} alt={recipe.name} className="w-full h-80 object-cover rounded-xl shadow-lg mb-8" />

      <section className="prose max-w-none dark:prose-invert">
        <h2 className="text-2xl font-semibold">About this Recipe</h2>
        <p>{recipe.about}</p>

        <h2 className="text-2xl font-semibold mt-6">Ingredients</h2>
        <ul className="list-disc pl-6 marker:text-red-500">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="mb-1">{ingredient}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mt-6">Preparation Steps</h2>
        <ol className="list-decimal pl-6 space-y-2">
          {recipe.preparationSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>

      {/* User Interaction: Likes and Comments */}
      <div className="mt-10 flex items-center gap-4">
        <button onClick={handleLike} className="flex items-center gap-2 text-gray-600 dark:text-white hover:text-red-500 dark:hover:text-red-500 focus:outline-none text-lg">
          {liked ? <FaHeart className="text-red-500" /> : <FaRegHeart />} {liked ? 'Liked' : 'Like'}
        </button>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Comments</h3>
        <form onSubmit={handleComment} className="mb-6">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-red-500 min-h-[120px] text-black bg-white"
            rows="4"
          />
          {error && (
             <p className="text-red-600 text-base mt-2 font-semibold">{error}</p>
          )}

          <button type="submit" className="mt-3 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold">
            Post Comment
          </button>
        </form>

        <div className="space-y-4 mt-6">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={comment.id} className="bg-gray-50 p-4 rounded-lg shadow">
                <strong className="block text-gray-800">{comment.user}</strong>
                <p className="text-gray-700 mt-1">{comment.text}</p>
              </div>
            ))
          ) : (
            <div className="bg-gray-100 p-4 rounded-lg shadow text-center text-gray-500">
              No comments yet. Be the first to share your thoughts!
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default RecipeDetailPage;