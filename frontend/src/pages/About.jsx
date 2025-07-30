import React from "react";
import { Link } from "react-router-dom";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container mt-28 dark:bg-slate-700 transition-colors duration-300">
      <Link
        to="/home"
        className="back-button bg-amber-400 font-bold text-black px-3 py-1 rounded inline-block mb-4 hover:bg-amber-500 dark:text-white"
      >
        &larr; Back to Home
      </Link>

      <h1 className="text-red-500 text-2xl font-semibold mb-3">
        About Our Recipe Sharing App
      </h1>
      <p className="text-lg text-gray-800 dark:text-gray-200 mb-4">
        Welcome to our Recipe Sharing App! This platform is designed for food
        lovers who want to explore, share, and save their favorite recipes.
        Whether you're a professional chef or a home cook, our app allows you to
        create, edit, and delete recipes, as well as interact with others by
        liking and commenting on their dishes.
      </p>

      <h2 className="text-red-500 text-xl font-semibold mb-2">Features</h2>
      <ul className="list-disc ml-6 marker:text-black dark:marker:text-white space-y-2">
        <li className="text-lg text-gray-800 dark:text-gray-200">
          Share your own recipes with the community.
        </li>
        <li className="text-lg text-gray-800 dark:text-gray-200">
          Explore a diverse range of recipes from different cuisines.
        </li>
        <li className="text-lg text-gray-800 dark:text-gray-200">
          Edit or delete your posted recipes anytime.
        </li>
        <li className="text-lg text-gray-800 dark:text-gray-200">
          Like and comment on recipes to engage with others.
        </li>
        <li className="text-lg text-gray-800 dark:text-gray-200">
          Save your favorite recipes for quick access.
        </li>
      </ul>

      <h2 className="text-red-500 text-xl font-semibold mt-4 mb-2">
        Why Choose Us?
      </h2>
      <p className="text-lg text-gray-800 dark:text-gray-200">
        Our app is built with a user-friendly interface, allowing seamless
        navigation and interaction. We believe that food brings people together,
        and through this app, we aim to create a vibrant community of food
        enthusiasts who inspire each other with their culinary creations.
      </p>
    </div>
  );
};

export default About;
