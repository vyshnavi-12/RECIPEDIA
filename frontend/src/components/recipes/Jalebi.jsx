import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaHeart, FaRegHeart } from "react-icons/fa";
import "../../styles/RecipeDetail.css";

function Jalebi() {
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
        className="back-button !text-black dark:!text-white"
        onClick={() => navigate("/dessert")}
      >
        <FaArrowLeft /> Back
      </div>

      <h1 className="text-2xl block text-center my-10">Jalebi</h1>

      <div className="recipe-image">
        <img src="/jalebi.jpg" alt="Jalebi" />
      </div>

      <div className="recipe-info">
        <h2 className="ingredientsH2 mt-2">About</h2>
        <p>
          A crispy, deep-fried Indian dessert soaked in sugar syrup, known for
          its spiral shape and sweet, tangy flavor.
        </p>

        <h2 className="ingredientsH2 mt-2 mb-2">Ingredients</h2>
        <h3 className="ingredientsH2 mt-2">For the Jalebi Batter:</h3>
        <ul className="ingredientsUl">
          <li>1 cup All-purpose flour (maida)</li>
          <li>2 tbsp Corn flour</li>
          <li>1/2 cup Yogurt</li>
          <li>1/2 tsp Baking soda</li>
          <li>1/2 cup Warm water (as needed)</li>
          <li>1/2 tsp Turmeric or saffron for color (optional)</li>
          <li>Oil or ghee for deep frying</li>
        </ul>

        <h3 className="ingredientsH2 mt-2">For the Sugar Syrup:</h3>
        <ul className="ingredientsUl">
          <li>1 cup Sugar</li>
          <li>1/2 cup Water</li>
          <li>1/2 tsp Cardamom powder</li>
          <li>1/2 tsp Lemon juice</li>
          <li>1/2 tsp Rose water (optional)</li>
        </ul>

        <h2 className="ingredientsH2 mt-2">Preparation Steps</h2>
        <ol className="list-decimal">
          <li>
            In a bowl, mix all-purpose flour, corn flour, yogurt, and baking
            soda
          </li>
          <li>
            Gradually add warm water to make a smooth, thick batter and let it
            ferment for 6-8 hours
          </li>
          <li>
            For sugar syrup: Boil sugar and water until sticky (1-string
            consistency), then add lemon juice, cardamom powder, and rose water
          </li>
          <li>
            Heat oil or ghee in a pan, fill a piping bag or squeeze bottle with
            the batter, and pipe spirals into hot oil
          </li>
          <li>
            Fry until golden and crisp, then dip immediately into warm sugar
            syrup for 30 seconds
          </li>
          <li>
            Remove and serve hot, garnished with saffron strands or chopped nuts
          </li>
        </ol>
      </div>

      <div className="user-interaction">
        <div className="mt-10 flex items-center gap-4">
          <button
            onClick={handleLike}
            className="flex items-center gap-2 text-gray-600 dark:text-white hover:text-red-500 dark:hover:text-red-500 focus:outline-none "
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

export default Jalebi;
