import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css'; // Assuming you have a CSS file for styling

const About = () => {
  return (
    <div className="about-container  mt-28 dark:bg-slate-700 ">
      <Link to="/home" className="back-button  dark:text-white bg-amber-400 font-bold ">&larr; Back to Home </Link>
      <h1 className='text-red-500 text-xl mb-2 mt-3'>About Our Recipe Sharing App</h1>
      <p className=' text-xl !text-black dark:!text-white'>
        Welcome to our Recipe Sharing App! This platform is designed for food lovers who want to explore, share, 
        and save their favorite recipes. Whether you're a professional chef or a home cook, our app allows you to 
        create, edit, and delete recipes, as well as interact with others by liking and commenting on their dishes.
      </p>
      <h2 className='text-red-500 text-xl mb-2 mt-3' >Features</h2>
      <ul className='list-disc ml-6 marker:text-black dark:marker:text-white'>
        <li className="ml-2 text-xl mb-2 !text-black dark:!text-white">Share your own recipes with the community.</li>
        <li className="ml-2 text-xl mb-2 !text-black dark:!text-white">Explore a diverse range of recipes from different cuisines.</li>
        <li className="ml-2 text-xl mb-2 !text-black dark:!text-white">Edit or delete your posted recipes anytime.</li>
        <li className="ml-2 text-xl mb-2 !text-black dark:!text-white">Like and comment on recipes to engage with others.</li>
        <li className="ml-2 text-xl mb-2 !text-black dark:!text-white">Save your favorite recipes for quick access.</li>
      </ul>
      <h2 className='text-red-500 text-xl mb-2 mt-4'>Why Choose Us?</h2>
      <p className='text-xl !text-black dark:!text-white'>
        Our app is built with a user-friendly interface, allowing seamless navigation and interaction. 
        We believe that food brings people together, and through this app, we aim to create a vibrant 
        community of food enthusiasts who inspire each other with their culinary creations.
      </p>
    </div>
  );
};

export default About;