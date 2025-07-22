import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div class="min-h-screen flex items-center justify-center bg-red-50 px-4">
      <div class="bg-white p-8 rounded-xl shadow-2xl border border-red-300 text-center">
        <h1 class="text-4xl font-bold text-red-600 mb-4">Something Went Wrong</h1>
        <p class="text-gray-700 mb-2">
          An unexpected error occurred while loading this page.
        </p>
        <p class="text-sm text-gray-500 mb-6">
          Please try again later or contact support.
        </p>
        <Link to="/" class="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition duration-300">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
