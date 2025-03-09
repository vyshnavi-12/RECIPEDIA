import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/veg.css';

const Beverages = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const recipes = [
    {
      id: 1,
      name: 'Masala Chai',
      image: '/masala.jpg',
      route: '/recipe/masala-chai'
    },
    {
      id: 2,
      name: 'Lassi (Sweet or Salty)',
      image: '/lassi.jpg',
      route: '/recipe/lassi'
    },
    {
      id: 3,
      name: 'Filter Coffee',
      image: '/coffee.jpg',
      route: '/recipe/coffee'
    },
    {
      id: 4,
      name: 'Thandai',
      image: '/thandai.jpg',
      route: '/recipe/thandai'
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
          placeholder="Search for beverages recipes..."
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

export default Beverages;
