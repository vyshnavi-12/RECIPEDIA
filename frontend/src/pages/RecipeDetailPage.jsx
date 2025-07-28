import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaHeart, FaRegHeart } from "react-icons/fa";
import allRecipes from "../data/recipes.json";
import NotFoundPage from "./NotFound.jsx";
import "../styles/RecipeDetail.css";
import { v4 as uuidv4 } from "uuid";

const RecipeDetailPage = () => {
  const { category, recipeId } = useParams();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState(null);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const found = allRecipes.find(
      (r) => r.id === recipeId && r.category === category
    );
    setRecipe(found);
  }, [recipeId, category]);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleComment = (e) => {
    e.preventDefault();
    const username = localStorage.getItem("username") || "Guest";
    if (!newComment.trim()) {
      setError("Comment cannot be empty!");
      return;
    }
    setComments([
      ...comments,
      { id: uuidv4(), text: newComment.trim(), user: username },
    ]);
    setNewComment("");
    setError("");
  };

  if (!recipe) {
    return <NotFoundPage />;
  }

  return (
    <div className="recipe-detail-container max-w-4xl mx-auto px-4 pt-32 pb-16 dark:bg-slate-800 dark:text-white">
      <button
        onClick={() => navigate(`/${recipe.category}`)}
        className="flex items-center text-red-500 hover:text-red-600 dark:text-white mb-6 text-xl"
      >
        <FaArrowLeft className="mr-2" /> Back to {recipe.category}
      </button>

      <h1 className="text-4xl font-bold text-center my-10">{recipe.name}</h1>

      <img
        src={recipe.image}
        alt={recipe.name}
        onError={(e) => {
          e.target.src = "/default.jpg";
        }}
        className="w-full h-80 object-cover rounded-xl shadow-lg mb-8"
      />

      <section className="prose max-w-none dark:prose-invert">
        <h2 className="text-2xl font-semibold">About this Recipe</h2>
        <p>{recipe.about}</p>

        <h2 className="text-2xl font-semibold mt-6">Ingredients</h2>
        <ul className="list-disc pl-6 marker:text-red-500">
          {recipe.ingredients.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mt-6">Preparation Steps</h2>
        <ol className="list-decimal pl-6 space-y-2">
          {recipe.preparationSteps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>

      <div className="mt-10">
        <button
          onClick={handleLike}
          className="flex items-center gap-2 text-gray-700 dark:text-white hover:text-red-500 dark:hover:text-red-500 focus:outline-none text-lg"
        >
          {liked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}{" "}
          {liked ? "Liked" : "Like"}
        </button>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">Comments</h3>
        <form onSubmit={handleComment}>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-red-500 min-h-[120px] text-black bg-white dark:bg-slate-700 dark:text-white"
          />
          {error && <p className="text-red-600 mt-2 font-semibold">{error}</p>}
          <button
            type="submit"
            className="mt-3 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold"
          >
            Post Comment
          </button>
        </form>

        <div className="space-y-4 mt-6">
          {comments.length > 0 ? (
            comments.map((c) => (
              <div
                key={c.id}
                className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg shadow"
              >
                <strong className="block text-gray-800 dark:text-white">
                  {c.user}
                </strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  {c.text}
                </p>
              </div>
            ))
          ) : (
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded-lg shadow text-center text-gray-500 dark:text-gray-300">
              No comments yet. Be the first to share your thoughts!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailPage;
