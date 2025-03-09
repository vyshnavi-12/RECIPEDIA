import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/veg.css';

const Nonveg = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const recipes = [
    {
      id: 1,
      name: 'Butter Chicken',
      image: '/chicken.jpg',
      route: '/recipe/butter-chicken'
    },
    {
      id: 2,
      name: 'Fish Curry',
      image: '/fish.jpg',
      route: '/recipe/fish'
    },
    {
      id: 3,
      name: 'Chicken Biryani',
      image: '/biriyani.jpg',
      route: '/recipe/biryani'
    },
    {
      id: 4,
      name: 'Prawn Masala',
      image: '/prawn.jpg',
      route: '/recipe/prawn'
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
          placeholder="Search for non-vegetarian recipes..."
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

export default Nonveg;
