import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/veg.css';

const Veg = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const recipes = [
    {
      id: 1,
      name: 'Paneer Butter Masala',
      image: '/paneer.jpg',
      route: '/recipe/paneer-butter-masala'
    },
    {
      id: 2,
      name: 'Vegetable Biryani',
      image: '/vegbiriyani.jpg',
      route: '/recipe/vegetable-biryani'
    },
    {
      id: 3,
      name: 'Palak Soup',
      image: '/palak.jpg',
      route: '/recipe/palak-soup'
    },
    {
      id: 4,
      name: 'Dal Makhani',
      image: '/dal.jpg',
      route: '/recipe/dal-makhani'
    }
  ];

  const handleCardClick = (route) => {
    navigate(route);
  };

  return (
    <div className="veg-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for vegetarian recipes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="recipe-grid1">
        {recipes
          .filter(recipe => recipe.name.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((recipe) => (
            <div
              key={recipe.id}
              className="recipe-card1"
              onClick={() => handleCardClick(recipe.route)}
            >
              <div className="recipe-content">
                <img src={recipe.image} alt={recipe.name} className="recipe-image" />
                <h3 className="recipe-name">{recipe.name}</h3>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Veg;
