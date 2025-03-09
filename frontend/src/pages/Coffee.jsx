import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaHeart, FaRegHeart } from 'react-icons/fa';
import '../styles/RecipeDetail.css';

function Coffee() {
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
      
      <h1>Filter Coffee</h1>
      
      <div className="recipe-image">
        <img src="/coffee.jpg" alt="Filter Coffee" />
      </div>

      <div className="recipe-info">
        <h2>About</h2>
        <p>A rich and aromatic South Indian coffee made using a traditional filter, blended with frothy milk for a smooth and bold taste.</p>

        <h2>Ingredients</h2>
        <ul>
          <li>2 tbsp Ground coffee powder (South Indian filter coffee blend)</li>
          <li>1 cup Water</li>
          <li>1/2 cup Boiled milk</li>
          <li>1-2 tsp Sugar (adjust to taste)</li>
        </ul>

        <h2>Preparation Steps</h2>
        <ol>
          <li>Add coffee powder to the upper chamber of a traditional South Indian coffee filter</li>
          <li>Pour hot water over the coffee and let it drip into the lower chamber (takes about 10-15 minutes)</li>
          <li>Boil milk and mix with the brewed coffee decoction</li>
          <li>Add sugar as per taste and mix well</li>
          <li>Pour the coffee back and forth between two cups to create froth</li>
          <li>Serve hot in a traditional tumbler and dabarah (small bowl) for authentic taste</li>
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

export default Coffee;