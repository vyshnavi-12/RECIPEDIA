import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <Link to="/home" className="back-button">&larr; Back to Home</Link>
      <h1>About Our Recipe Sharing App</h1>
      <p>
        Welcome to our Recipe Sharing App! This platform is designed for food lovers who want to explore, share, 
        and save their favorite recipes. Whether you're a professional chef or a home cook, our app allows you to 
        create, edit, and delete recipes, as well as interact with others by liking and commenting on their dishes.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Share your own recipes with the community.</li>
        <li>Explore a diverse range of recipes from different cuisines.</li>
        <li>Edit or delete your posted recipes anytime.</li>
        <li>Like and comment on recipes to engage with others.</li>
        <li>Save your favorite recipes for quick access.</li>
      </ul>
      <h2>Why Choose Us?</h2>
      <p>
        Our app is built with a user-friendly interface, allowing seamless navigation and interaction. 
        We believe that food brings people together, and through this app, we aim to create a vibrant 
        community of food enthusiasts who inspire each other with their culinary creations.
      </p>
    </div>
  );
};

export default About;