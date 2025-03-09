import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaHeart, FaRegHeart } from 'react-icons/fa';
import '../styles/RecipeDetail.css';

function DalMaKhani() {
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
      <div className="back-button" onClick={() => navigate('/veg')}>
        <FaArrowLeft /> Back
      </div>
      
      <h1>Dal Makhani</h1>
      
      <div className="recipe-image">
        <img src="/dal.jpg" alt="Dal Makhani" />
      </div>

      <div className="recipe-info">
        <h2>About</h2>
        <p>A rich and creamy North Indian lentil dish made with black lentils (urad dal) and kidney beans (rajma) slow-cooked with butter, cream, and aromatic spices.</p>

        <h2>Ingredients</h2>
        <ul>
          <li>1 cup Black lentils (Urad dal)</li>
          <li>1/4 cup Kidney beans (Rajma)</li>
          <li>4 tbsp Butter</li>
          <li>1 cup Tomato puree</li>
          <li>1/2 cup Heavy cream</li>
          <li>2 tbsp Ginger-garlic paste</li>
          <li>2 tsp Garam masala</li>
          <li>Salt to taste</li>
          <li>1 tsp Kasuri methi</li>
        </ul>

        <h2>Preparation Steps</h2>
        <ol>
          <li>Soak black lentils and kidney beans overnight, then pressure cook until soft.</li>
          <li>Heat butter in a pan and sauté ginger-garlic paste.</li>
          <li>Add tomato puree and cook until oil separates.</li>
          <li>Add cooked lentils, spices, and simmer for 20 minutes.</li>
          <li>Stir in cream and cook on low heat for 10 more minutes.</li>
          <li>Garnish with kasuri methi and serve hot with naan or rice.</li>
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

export default DalMaKhani;