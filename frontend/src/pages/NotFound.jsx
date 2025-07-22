import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-2xl mt-4 font-semibold text-gray-800">Recipe Not Found</p>
      <p className="text-gray-500 mt-2">Oops! The recipe you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
