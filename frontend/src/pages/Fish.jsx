import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaHeart, FaRegHeart } from "react-icons/fa";
import "../styles/RecipeDetail.css";

function Fish() {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([
        ...comments,
        { text: newComment, user: localStorage.getItem("username") },
      ]);
      setNewComment("");
    }
  };

  return (
    <div className="recipe-detail-container ingrdientsDiv">
      <div
        className="back-button dark:text-white"
        onClick={() => navigate("/nonveg")}
      >
        <FaArrowLeft /> Back
      </div>

      <h1 className="text-2xl block text-center my-10">Fish Curry</h1>

      <div className="recipe-image">
        <img src="/fish.jpg" alt="Fish Curry" />
      </div>

      <div className="recipe-info">
        <h2 className="ingredientsH2">About</h2>
        <p>
          A delicious and aromatic Indian fish curry made with tender fish
          pieces simmered in a spiced coconut or tomato-based gravy.
        </p>

        <h2 className="ingredientsH2">Ingredients</h2>
        <ul className="ingredientsUl">
          <li>
            500g Fish (Pomfret, Kingfish, or any firm fish), cut into pieces
          </li>
          <li>2 tbsp Oil</li>
          <li>1 Onion, finely chopped</li>
          <li>2 Tomatoes, pureed</li>
          <li>1 tbsp Ginger-garlic paste</li>
          <li>1 cup Coconut milk (or water for a lighter version)</li>
          <li>1 tsp Turmeric powder</li>
          <li>1 tsp Red chili powder</li>
          <li>1 tsp Coriander powder</li>
          <li>1/2 tsp Cumin powder</li>
          <li>1 tsp Garam masala</li>
          <li>Salt to taste</li>
          <li>1 tsp Mustard seeds</li>
          <li>1 Sprig Curry leaves</li>
          <li>1 tsp Tamarind paste (optional, for tanginess)</li>
          <li>Fresh coriander for garnish</li>
        </ul>

        <h2 className="ingredientsH2">Preparation Steps</h2>
        <ol className="list-decimal">
          <li>
            Heat oil in a pan, add mustard seeds and curry leaves, and let them
            splutter
          </li>
          <li>Sauté onions until golden brown, then add ginger-garlic paste</li>
          <li>
            Mix in tomato puree, turmeric, chili powder, cumin, and coriander
            powder
          </li>
          <li>Cook until the oil separates from the masala</li>
          <li>Add coconut milk and tamarind paste, mix well</li>
          <li>
            Gently add fish pieces, cover, and cook for 10 minutes until tender
          </li>
          <li>Sprinkle garam masala and garnish with fresh coriander</li>
          <li>Serve hot with steamed rice or roti</li>
        </ol>
      </div>

      <div className="user-interaction">
        <div className="mt-10 flex items-center gap-4">
          <button
            onClick={handleLike}
            className="flex items-center gap-2 text-gray-600 dark:text-white hover:text-red-500 dark:hover:text-red-500 focus:outline-none"
          >
            {liked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}{" "}
            {liked ? "Liked" : "Like"}
          </button>
        </div>

        <div className="comment-section">
          <h3>Comments</h3>
          <form onSubmit={handleComment}>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="text-black"
            />
            <button type="submit">Post Comment</button>
          </form>

          <div className="comments-list">
            {comments.map((comment, index) => (
              <div key={index} className="comment">
                <strong>{comment.user}</strong>
                <p>{comment.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fish;
