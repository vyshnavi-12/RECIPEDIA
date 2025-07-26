import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaHeart, FaRegHeart } from "react-icons/fa";
import "../styles/RecipeDetail.css";

function Thandai() {
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
        onClick={() => navigate("/beverages")}
      >
        <FaArrowLeft /> Back
      </div>

      <h1 className="text-2xl block text-center my-10">Thandai</h1>

      <div className="recipe-image">
        <img src="/thandai.jpg" alt="Thandai" />
      </div>

      <div className="recipe-info">
        <h2 className="ingredientsH2 mt-2">About</h2>
        <p>
          A refreshing and aromatic Indian beverage made with milk, nuts, and a
          blend of spices, traditionally enjoyed during festivals like Holi and
          Mahashivratri.
        </p>

        <h2 className="ingredientsH2 mt-2">Ingredients</h2>
        <ul className="ingredientsUl">
          <li>2 cups Milk</li>
          <li>2 tbsp Almonds</li>
          <li>1 tbsp Cashews</li>
          <li>1 tbsp Pistachios</li>
          <li>1 tbsp Poppy seeds</li>
          <li>1 tbsp Fennel seeds</li>
          <li>1/2 tsp Black pepper</li>
          <li>4-5 Cardamom pods</li>
          <li>2 tbsp Sugar or honey</li>
          <li>1/2 tsp Rose water (optional)</li>
          <li>1/2 tsp Saffron strands (optional)</li>
          <li>Chilled water or ice cubes (optional, for a lighter version)</li>
          <li>Chopped nuts for garnish</li>
        </ul>

        <h2 className="ingredientsH2 mt-2">Preparation Steps</h2>
        <ol className="list-decimal">
          <li>
            Soak almonds, cashews, pistachios, poppy seeds, fennel seeds, and
            cardamom in warm water for 2-3 hours
          </li>
          <li>
            Blend the soaked ingredients with black pepper and a little milk to
            form a smooth paste
          </li>
          <li>Boil milk, add the prepared paste, and mix well</li>
          <li>
            Stir in sugar, saffron, and rose water (if using), and let it cool
          </li>
          <li>Refrigerate for 1-2 hours for flavors to blend</li>
          <li>
            Strain (optional) and serve chilled, garnished with chopped nuts
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

export default Thandai;
