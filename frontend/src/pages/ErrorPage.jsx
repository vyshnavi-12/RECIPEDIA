import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = ({ errorMessage = "Something went wrong." }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white">
      <h1 className="text-5xl font-bold text-yellow-500">⚠️ Error</h1>
      <p className="text-xl mt-4 text-gray-800">{errorMessage}</p>
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
