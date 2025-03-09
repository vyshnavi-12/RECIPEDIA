import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaHeart, FaRegHeart } from 'react-icons/fa';
import '../styles/RecipeDetail.css';

function VegetableBiryani() {
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
      
      <h1>Vegetable Biryani</h1>
      
      <div className="recipe-image">
        <img src="/vegbiriyani.jpg" alt="Vegetable Biryani" />
      </div>

      <div className="recipe-info">
        <h2>About</h2>
        <p>A fragrant and flavorful rice dish made with aromatic spices, basmati rice, and a mix of fresh vegetables.</p>

        <h2>Ingredients</h2>
        <ul>
          <li>2 cups Basmati rice</li>
          <li>2 tbsp Ghee or oil</li>
          <li>1 Onion, sliced</li>
          <li>1 Tomato, chopped</li>
          <li>1 cup Mixed vegetables (carrot, beans, peas, potato)</li>
          <li>1 tbsp Ginger-garlic paste</li>
          <li>2 tsp Biryani masala</li>
          <li>1/2 tsp Turmeric powder</li>
          <li>1/2 tsp Red chili powder</li>
          <li>1/2 cup Yogurt</li>
          <li>2 cups Water or vegetable broth</li>
          <li>Salt to taste</li>
          <li>Fresh coriander and mint for garnish</li>
        </ul>

        <h2>Preparation Steps</h2>
        <ol>
          <li>Rinse and soak basmati rice for 20 minutes</li>
          <li>Heat ghee in a pan, sauté onions until golden brown</li>
          <li>Add ginger-garlic paste, tomatoes, and cook until soft</li>
          <li>Mix in chopped vegetables, biryani masala, turmeric, and chili powder</li>
          <li>Stir in yogurt, cook for 5 minutes, then add water and salt</li>
          <li>Add soaked rice, cover, and cook on low heat until rice is fluffy</li>
          <li>Garnish with fresh coriander and mint, serve hot</li>
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

export default VegetableBiryani;