import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaHeart, FaRegHeart } from 'react-icons/fa';
import '../styles/RecipeDetail.css';

function Rasgulla() {
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
      <div className="back-button" onClick={() => navigate('/dessert')}>
        <FaArrowLeft /> Back
      </div>
      
      <h1>Rasgulla</h1>
      
      <div className="recipe-image">
        <img src="/rasgulla.jpg" alt="Rassgulla" />
      </div>

      <div className="recipe-info">
        <h2>About</h2>
        <p>A soft and spongy Bengali dessert made from chhena (Indian cottage cheese) balls cooked in a light sugar syrup.</p>

        <h2>Ingredients</h2>
        <h3>For the Chhena (Paneer):</h3>
        <ul>
          <li>1 liter Full-fat milk</li>
          <li>2 tbsp Lemon juice or vinegar</li>
          <li>2 cups Cold water</li>
          <li>1 tsp Corn flour (optional, for binding)</li>
        </ul>

        <h3>For the Sugar Syrup:</h3>
        <ul>
          <li>1 cup Sugar</li>
          <li>4 cups Water</li>
          <li>2 Cardamom pods (optional)</li>
          <li>1 tsp Rose water (optional)</li>
        </ul>

        <h2>Preparation Steps</h2>
        <ol>
          <li>Boil milk, then add lemon juice or vinegar to curdle it</li>
          <li>Strain the curdled milk using a muslin cloth and rinse with cold water to remove acidity</li>
          <li>Hang the chhena for 30 minutes to remove excess water</li>
          <li>Knead the chhena for 5-7 minutes until smooth and soft</li>
          <li>Add corn flour (if using) and knead again, then shape into small, smooth balls</li>
          <li>In a wide pan, boil water and sugar to make syrup, adding cardamom pods</li>
          <li>Drop the chhena balls into boiling syrup and cook covered for 15-20 minutes on medium heat</li>
          <li>Turn off the heat and let them cool in the syrup</li>
          <li>Add rose water if desired and refrigerate before serving chilled</li>
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

export default Rasgulla;