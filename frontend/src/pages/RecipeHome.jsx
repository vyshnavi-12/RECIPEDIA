import React, { useEffect } from 'react';
import { PlusSquare , Search , UserPlus } from "lucide-react"
import HeroSection from '../components/HeroSection.jsx';


const RecipeHome = () => {
  return (
    <div>
      <div>
      <HeroSection />        
        {/* Categories Section */}
        <section id="categories" className="py-20 bg-gray-50 dark:bg-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">Browse by Category</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Vegetarian */}
              <a href="/veg" className="block category-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl dark:!shadow-lg dark:!shadow-slate-200 transition transform hover:-translate-y-1 dark:shadow-md">
                <img src="/veg.jpg" alt="Vegetarian" className="w-full h-40 object-cover" />
                <div className="p-6 text-center !bg-white dark:!bg-slate-700">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">Vegetarian</h3>
                </div>
              </a>
              {/* Non-Vegetarian */}
              <a href="/nonveg" className="block category-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl dark:!shadow-lg dark:!shadow-slate-200 transition transform hover:-translate-y-1">
                <img src="/nonveg.jpg" alt="Non-Vegetarian" className="w-full h-40 object-cover" />
                <div className="p-6 text-center  !bg-white dark:!bg-slate-700">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">Non-Vegetarian</h3>
                </div>
              </a>
              {/* Desserts */}
              <a href="/dessert" className="block category-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl dark:!shadow-lg dark:!shadow-slate-200 transition transform hover:-translate-y-1">
                <img src="/dessert.jpg" alt="Desserts" className="w-full h-40 object-cover" />
                <div className="p-6 text-center  !bg-white dark:!bg-slate-700">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">Desserts</h3>
                </div>
              </a>
              {/* Beverages */}
              <a href="/beverages" className="block category-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl dark:!shadow-lg dark:!shadow-slate-200  transition transform hover:-translate-y-1 ">
                <img src="/beverages.jpg" alt="Beverages" className="w-full h-40 object-cover" />
                <div className="p-6 text-center  !bg-white dark:!bg-slate-700">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">Beverages</h3>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Get Cooking in 3 Easy Steps</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Join our community and start your culinary journey today.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {/* Step 1 */}
              <div className="p-6">
                <div className="bg-red-100 text-red-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-md">
                 <UserPlus className="w-10 h-10"/>
                </div>
                <h3 className="text-xl font-bold mb-3">Create an Account</h3>
                <p className="text-gray-600">Sign up for free to get your personalized profile and start your collection.</p>
              </div>
              {/* Step 2 */}
              <div className="p-6">
                <div className="bg-yellow-100 text-yellow-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-md">
                  <PlusSquare className="w-10 h-10" />
                </div>

                <h3 className="text-xl font-bold mb-3">Add Your Recipes</h3>
                <p className="text-gray-600">Share your favorite dishes with our community using our simple recipe editor.</p>
              </div>
              {/* Step 3 */}
              <div className="p-6">
                <div className="bg-green-100 text-green-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-md">
                  <Search className="w-10 h-10"/>
                </div>
                <h3 className="text-xl font-bold mb-3">Explore & Interact</h3>
                <p className="text-gray-600">Discover new meals, leave comments, and like the recipes that inspire you.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 !bg-white dark:!bg-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img src="https://placehold.co/600x450/fbbf24/ffffff?text=Recipedia+App" alt="Recipedia App Interface" className="rounded-xl shadow-2xl" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold !text-gray-800 dark:!text-white mb-6">All The Tools You Need</h2>
                <ul className="space-y-6">
                  <li className="flex items-start space-x-4">
                    <div className="bg-red-500 text-white rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center mt-1">
                      <i data-lucide="lock" className="w-5 h-5"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold !text-gray-800 dark:!text-white">Secure User Authentication</h3>
                      <p className="text-gray-600 dark:text-gray-300">Keep your recipes and profile safe with our secure login and sign-up system.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="bg-red-500 text-white rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center mt-1">
                      <i data-lucide="edit" className="w-5 h-5"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold !text-gray-800 dark:!text-white">Full Recipe Management</h3>
                      <p className="text-gray-600 dark:text-gray-300">Easily add, edit, and delete your recipes whenever you want.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="bg-red-500 text-white rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center mt-1">
                      <i data-lucide="thumbs-up" className="w-5 h-5"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold !text-gray-800 dark:!text-white">Community Interaction</h3>
                      <p className="text-gray-600 dark:text-gray-300 ">Like your favorite recipes and leave comments to connect with other foodies.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-red-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Share Your Culinary Genius?</h2>
            <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">Create your free account today and become part of the Recipedia family. Your next favorite dish is just a click away.</p>
            <a href="/register" className="bg-white text-red-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition transform hover:scale-105 shadow-lg">Sign Up Now</a>
          </div>
        </section>
      </div>
      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold mb-4">Recipedia</h4>
              <p className="text-gray-400">Your daily source for delicious recipes from around the world.</p>
            </div>
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#recipes" className="text-gray-400 hover:text-white">Explore</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="/add-recipe" className="text-gray-400 hover:text-white">Add Recipe</a></li>
              </ul>
            </div>
            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            {/* Social */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white"><i data-lucide="facebook" className="w-6 h-6"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i data-lucide="instagram" className="w-6 h-6"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i data-lucide="twitter" className="w-6 h-6"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i data-lucide="youtube" className="w-6 h-6"></i></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500">
            <p>&copy; 2025 Recipedia. Built with ❤️ for food lovers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RecipeHome; 