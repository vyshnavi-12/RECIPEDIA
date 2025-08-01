import React, { useEffect } from 'react';
import { PlusSquare , Search , UserPlus } from "lucide-react"
import HeroSection from '../components/HeroSection.jsx';
import CategoriesSection from '../components/CategoriesSection.jsx';
import HowItWorksSection from '../components/HowItWorksSection.jsx';
import FeaturesSection from '../components/FeaturesSection.jsx';
import CTASection from '../components/CTASection.jsx';


const RecipeHome = () => {
  return (
    <div>
      <div>
      <HeroSection />        
      <CategoriesSection />
      <HowItWorksSection />
      <FeaturesSection />
      <CTASection />
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