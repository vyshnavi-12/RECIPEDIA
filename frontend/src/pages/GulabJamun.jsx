import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaHeart, FaRegHeart } from 'react-icons/fa';
import '../styles/RecipeDetail.css';

function GulabJamun() {
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
      
      <h1>Gulab Jamun</h1>
      
      <div className="recipe-image">
        <img src="/jamun.jpg" alt="Gulab Jamun" />
      </div>

      <div className="recipe-info">
        <h2>About</h2>
        <p>A classic Indian dessert made from deep-fried milk-based dumplings soaked in a fragrant sugar syrup.</p>

        <h2>Ingredients</h2>
        <h3>For the Gulab Jamun:</h3>
        <ul>
          <li>1 cup Milk powder</li>
          <li>1/4 cup All-purpose flour (maida)</li>
          <li>1/4 tsp Baking soda</li>
          <li>2 tbsp Ghee (clarified butter)</li>
          <li>1/4 cup Milk (warm, as needed for kneading)</li>
          <li>Oil or ghee for deep frying</li>
        </ul>

        <h3>For the Sugar Syrup:</h3>
        <ul>
          <li>1 cup Sugar</li>
          <li>1/2 cup Water</li>
          <li>2 Cardamom pods, crushed</li>
          <li>1/2 tsp Rose water (optional)</li>
          <li>1/2 tsp Lemon juice (to prevent crystallization)</li>
        </ul>

        <h2>Preparation Steps</h2>
        <ol>
          <li>In a bowl, mix milk powder, all-purpose flour, and baking soda</li>
          <li>Add ghee and mix until the mixture becomes crumbly</li>
          <li>Gradually add warm milk and knead into a soft dough (do not over-knead)</li>
          <li>Cover and let it rest for 10 minutes, then shape into smooth, crack-free balls</li>
          <li>Heat oil or ghee on low-medium flame and fry the balls until golden brown</li>
          <li>For sugar syrup: Boil sugar and water until slightly sticky, then add cardamom, rose water, and lemon juice</li>
          <li>Add the fried gulab jamuns to the warm syrup and let them soak for at least 2 hours</li>
          <li>Serve warm or chilled, garnished with chopped nuts if desired</li>
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

export default GulabJamun;