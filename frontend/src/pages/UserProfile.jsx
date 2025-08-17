import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';
import "../styles/UserProfile.css"; 

const UserProfile = () => {
  const navigate = useNavigate();

  const user = {
    name: "Julia Chen",
    avatar: "/profile.jpg",
    bio: "Passionate home chef exploring flavors from around the world. Love creating healthy fusion recipes!",
    favoriteCuisines: ["Italian", "Indian"],
    dietaryPreferences: ["Vegetarian", "Desserts"],
    favoriteRecipe: { id: 101, name: "Paneer Butter Masala", cuisine: "Indian" },
    likedRecipes: [
      { id: 201, name: "Palak Soup" },
      { id: 202, name: "Falooda" },
    ],
    recentComments: [
      { id: 301, recipe: "Jalebi", comment: "Loved the flavor balance!" },
      { id: 302, recipe: "Gulab Jamun", comment: "Turned out so fluffy and moist!" },
    ],
    savedRecipes: [
      { id: 1, name: "Masala Chai" },
      { id: 2, name: "Prawn Maslala" },
      { id: 3, name: "Dal Makhni" }
    ]
  };

  return (
    <>
      {/* Back Button */}
      <div className="back-button" onClick={() => navigate('/home')}>
        <FaArrowLeft className="back-arrow" /> Back
      </div>

      <div className="profile-container">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-avatar">
            <img src={user.avatar} alt={user.name} />
          </div>
          <h1 className="profile-name">{user.name}</h1>
          <p className="profile-bio">{user.bio}</p>
        </div>

        {/* Profile Content */}
        <div className="profile-content">
          {/* Favorite Recipe Section */}
          <div className="profile-section">
            <h2>Favorite Recipe</h2>
            <div className="favorite-recipe-card">
              <h3>{user.favoriteRecipe.name}</h3>
              <span className="cuisine-tag">{user.favoriteRecipe.cuisine}</span>
            </div>
          </div>

          {/* Favorite Cuisines */}
          <div className="profile-section">
            <h2>Favorite Cuisines</h2>
            <div className="tags-container">
              {user.favoriteCuisines.map(cuisine => (
                <span key={cuisine} className="tag">{cuisine}</span>
              ))}
            </div>
          </div>

          {/* Dietary Preferences */}
          <div className="profile-section">
            <h2>Dietary Preferences</h2>
            <div className="tags-container">
              {user.dietaryPreferences.map(pref => (
                <span key={pref} className="tag">{pref}</span>
              ))}
            </div>
          </div>

          {/* Liked Recipes */}
          <div className="profile-section">
            <h2>Liked Recipes</h2>
            <div className="recipes-grid">
              {user.likedRecipes.map(recipe => (
                <div key={recipe.id} className="recipe-card liked">
                  <h3>{recipe.name}</h3>
                  <span className="cuisine-tag">{recipe.cuisine}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Comments */}
          <div className="profile-section">
            <h2>Recent Comments</h2>
            <div className="comments-list">
              {user.recentComments.map(comment => (
                <div key={comment.id} className="comment-card">
                  <p><strong>{comment.recipe}:</strong> {comment.comment}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Saved Recipes */}
          <div className="profile-section">
            <h2>Saved Recipes</h2>
            <div className="recipes-grid">
              {user.savedRecipes.map(recipe => (
                <div key={recipe.id} className="recipe-card">
                  <h3>{recipe.name}</h3>
                  <span className="cuisine-tag">{recipe.cuisine}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
