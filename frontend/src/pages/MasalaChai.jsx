import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaHeart, FaRegHeart } from 'react-icons/fa';
import '../styles/RecipeDetail.css';

function MasalaChai() {
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
    <div className="recipe-detail-container ingrdientsDiv">
      <div className="back-button !text-black dark:!text-white" onClick={() => navigate('/beverages')}>
        <FaArrowLeft /> Back
      </div>
      
      <h1 className="text-2xl block text-center my-10">Masala Chai</h1>
      
      <div className="recipe-image">
        <img src="/masala.jpg" alt="Maasala Chai" />
      </div>

      <div className="recipe-info">
        <h2 className="ingredientsH2 mt-2">About</h2>
        <p>A fragrant and spiced Indian tea made by brewing black tea leaves with aromatic spices, milk, and sugar.</p>

        <h2 className="ingredientsH2 mt-2">Ingredients</h2>
        <ul className="ingredientsUl">
          <li>2 cups Water</li>
          <li>1 cup Milk</li>
          <li>2 tsp Black tea leaves (or 2 tea bags)</li>
          <li>2 tbsp Sugar (adjust to taste)</li>
          <li>2 Green cardamom pods, crushed</li>
          <li>1 Small cinnamon stick</li>
          <li>2 Cloves</li>
          <li>1/2 inch Ginger, grated</li>
          <li>1/2 tsp Black peppercorns, crushed</li>
        </ul>

        <h2 className="ingredientsH2 mt-2">Preparation Steps</h2>
        <ol className='list-decimal'>
          <li>In a saucepan, bring water to a boil</li>
          <li>Add crushed cardamom, cinnamon, cloves, black pepper, and grated ginger</li>
          <li>Simmer for 2-3 minutes to infuse the flavors</li>
          <li>Add black tea leaves and let it brew for 3-4 minutes</li>
          <li>Pour in milk and sugar, stir well, and bring to a gentle boil</li>
          <li>Strain the tea into cups and serve hot</li>
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
              className='text-black'
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

export default MasalaChai;