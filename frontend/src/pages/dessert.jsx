import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/veg.css';

const Dessert = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const recipes = [
    {
      id: 1,
      name: 'Gulab Jamun',
      image: '/jamun.jpg',
      route: '/recipe/gulub-jamun'
    },
    {
      id: 2,
      name: 'Rasgulla',
      image: '/rasgulla.jpg',
      route: '/recipe/rasgulla'
    },
    {
      id: 3,
      name: 'Jalebi',
      image: '/jalebi.jpg',
      route: '/recipe/jalebi'
    },
    {
      id: 4,
      name: 'Falooda',
      image: '/falooda.jpg',
      route: '/recipe/falooda'
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
          placeholder="Search for dessert recipes..."
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

export default Dessert;
