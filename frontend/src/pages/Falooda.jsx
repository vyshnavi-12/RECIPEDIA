import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaHeart, FaRegHeart } from 'react-icons/fa';
import '../styles/RecipeDetail.css';

function Falooda() {
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
      
      <h1>Falooda</h1>
      
      <div className="recipe-image">
        <img src="/falooda.jpg" alt="Falooda" />
      </div>

      <div className="recipe-info">
        <h2>About</h2>
        <p>A rich and refreshing Indian dessert drink made with milk, basil seeds, falooda sev, rose syrup, and ice cream.</p>

        <h2>Ingredients</h2>
        <ul>
          <li>2 cups Chilled milk</li>
          <li>2 tbsp Rose syrup</li>
          <li>2 tbsp Basil seeds (sabja), soaked</li>
          <li>1/4 cup Falooda sev (vermicelli), cooked</li>
          <li>2 tbsp Sugar (adjust to taste)</li>
          <li>1 scoop Vanilla or kulfi ice cream</li>
          <li>1 tbsp Chopped nuts (almonds/pistachios) for garnish</li>
          <li>1/2 tbsp Chopped jelly cubes (optional)</li>
          <li>Chopped fruits (like mango or strawberry, optional)</li>
        </ul>

        <h2>Preparation Steps</h2>
        <ol>
          <li>Soak basil seeds in water for 10-15 minutes until they expand</li>
          <li>Boil falooda sev as per package instructions, then drain and cool</li>
          <li>In a glass, add rose syrup at the bottom</li>
          <li>Layer soaked basil seeds, cooked falooda sev, and chilled milk</li>
          <li>Add sugar if needed and mix gently</li>
          <li>Top with a scoop of ice cream, chopped nuts, and jelly cubes (if using)</li>
          <li>Serve immediately with a long spoon and straw</li>
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

export default Falooda;