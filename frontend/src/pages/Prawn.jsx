import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaHeart, FaRegHeart } from 'react-icons/fa';
import '../styles/RecipeDetail.css';

function Prawn() {
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
      
      <h1>Prawn Masala</h1>
      
      <div className="recipe-image">
        <img src="/prawn.jpg" alt="Prawn Masala" />
      </div>

      <div className="recipe-info">
        <h2>About</h2>
        <p>A spicy and flavorful Indian dish made with prawns cooked in a rich tomato-based masala with aromatic spices.</p>

        <h2>Ingredients</h2>
        <ul>
          <li>500g Prawns, cleaned and deveined</li>
          <li>2 tbsp Oil</li>
          <li>1 Onion, finely chopped</li>
          <li>2 Tomatoes, pureed</li>
          <li>1 tbsp Ginger-garlic paste</li>
          <li>1 tsp Turmeric powder</li>
          <li>1 tsp Red chili powder</li>
          <li>1 tsp Garam masala</li>
          <li>1/2 tsp Cumin powder</li>
          <li>1/2 tsp Coriander powder</li>
          <li>Salt to taste</li>
          <li>1 tsp Kasuri methi (dried fenugreek leaves)</li>
          <li>Fresh coriander for garnish</li>
        </ul>

        <h2>Preparation Steps</h2>
        <ol>
          <li>Heat oil in a pan and sauté onions until golden brown</li>
          <li>Add ginger-garlic paste and cook until fragrant</li>
          <li>Mix in tomato puree, turmeric, chili powder, cumin, and coriander powder</li>
          <li>Cook until the oil separates from the masala</li>
          <li>Add prawns, salt, and cook for 5-7 minutes until they turn pink and tender</li>
          <li>Stir in garam masala and kasuri methi, mix well</li>
          <li>Garnish with fresh coriander and serve hot with rice or roti</li>
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

export default Prawn;