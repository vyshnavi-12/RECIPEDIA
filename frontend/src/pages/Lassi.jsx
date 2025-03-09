import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaHeart, FaRegHeart } from 'react-icons/fa';
import '../styles/RecipeDetail.css';

function Lassi() {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, { text: newComment, user: localStorage.getItem('username') }]);
      setNewComment('');
    }
  };

  return (
    <div className="recipe-detail-container">
      <div className="back-button" onClick={() => navigate('/beverages')}>
        <FaArrowLeft /> Back
      </div>
      
      <h1>Lassi (Sweet & Salty)</h1>
      
      <div className="recipe-image">
        <img src="/lassi.jpg" alt="Lassi" />
      </div>

      <div className="recipe-info">
        <h2>About</h2>
        <p>A refreshing and creamy yogurt-based Indian drink, available in both sweet and salty variations.</p>

        <h2>Ingredients</h2>
        <ul>
          <li>2 cups Yogurt (curd)</li>
          <li>1 cup Chilled water or milk</li>
          <li>4-5 Ice cubes</li>
        </ul>

        <h2>For Sweet Lassi</h2>
        <ul>
          <li>2 tbsp Sugar or honey (adjust to taste)</li>
          <li>1/2 tsp Cardamom powder</li>
          <li>1 tbsp Chopped nuts (almonds/pistachios) for garnish</li>
          <li>1/2 tsp Rose water (optional)</li>
        </ul>

        <h2>For Salty Lassi</h2>
        <ul>
          <li>1/2 tsp Salt</li>
          <li>1/2 tsp Roasted cumin powder</li>
          <li>1 tbsp Chopped coriander leaves</li>
          <li>1/2 tsp Black salt (optional, for extra flavor)</li>
        </ul>

        <h2>Preparation Steps</h2>
        <ol>
          <li>In a blender, add yogurt, chilled water or milk, and ice cubes</li>
          <li>For sweet lassi: Add sugar, cardamom powder, and blend until frothy</li>
          <li>For salty lassi: Add salt, roasted cumin powder, and blend well</li>
          <li>Pour into glasses and garnish with nuts (for sweet) or coriander leaves (for salty)</li>
          <li>Serve chilled and enjoy!</li>
        </ol>
      </div>


    

      <div className="user-interaction">
        <div className="like-section">
          <button onClick={handleLike}>
            {liked ? <FaHeart color="red" /> : <FaRegHeart />}
            {liked ? ' Liked' : ' Like'}
          </button>
        </div>

        <div className="comment-section">
          <h3>Comments</h3>
          <form onSubmit={handleComment}>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
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

export default Lassi;