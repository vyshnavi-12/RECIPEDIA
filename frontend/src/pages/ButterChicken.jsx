import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaHeart, FaRegHeart } from 'react-icons/fa';
import '../styles/RecipeDetail.css';

function ButterChicken() {
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
      <div className="back-button" onClick={() => navigate('/nonveg')}>
        <FaArrowLeft /> Back
      </div>
      
      <h1>Butter Chicken</h1>
      
      <div className="recipe-image">
        <img src="/chicken.jpg" alt="Butter Chicken" />
      </div>

      <div className="recipe-info">
        <h2>About</h2>
        <p>A rich and creamy North Indian dish made with tender chicken cooked in a spiced tomato-butter sauce.</p>

        <h2>Ingredients</h2>
        <ul>
          <li>500g Chicken, boneless and cut into pieces</li>
          <li>2 tbsp Butter</li>
          <li>1 cup Tomato puree</li>
          <li>1/2 cup Heavy cream</li>
          <li>2 tbsp Yogurt</li>
          <li>1 tbsp Ginger-garlic paste</li>
          <li>1 tsp Garam masala</li>
          <li>1/2 tsp Turmeric powder</li>
          <li>1/2 tsp Red chili powder</li>
          <li>Salt to taste</li>
          <li>1 tsp Kasuri methi (dried fenugreek leaves)</li>
          <li>Fresh coriander for garnish</li>
        </ul>

        <h2>Preparation Steps</h2>
        <ol>
          <li>Marinate chicken with yogurt, ginger-garlic paste, turmeric, chili powder, and salt for 30 minutes</li>
          <li>Heat butter in a pan, cook marinated chicken until lightly browned</li>
          <li>Remove chicken and set aside</li>
          <li>In the same pan, add tomato puree and cook until oil separates</li>
          <li>Stir in garam masala, kasuri methi, and cooked chicken</li>
          <li>Pour in heavy cream, mix well, and simmer for 10 minutes</li>
          <li>Garnish with fresh coriander and serve hot with naan or rice</li>
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

export default ButterChicken;