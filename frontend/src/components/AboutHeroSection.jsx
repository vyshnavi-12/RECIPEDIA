import React from 'react';
import { ChefHat, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutHeroSection = () => {
  return (
    <section className="relative h-96 bg-gradient-to-br from-red-600 via-red-700 to-rose-800 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-pink-500 to-red-400 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-3xl opacity-15 animate-bounce" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10 text-white">
        <Link
          to="/home"
          className="inline-flex items-center gap-2 mb-6 text-white hover:text-red-200 transition-colors duration-300"
          aria-label="Back to Home"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        <div className="max-w-3xl">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
            <ChefHat className="w-5 h-5 mr-2 animate-spin" style={{ animationDuration: '3s' }} />
            <span className="font-semibold">About Recipedia</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black mb-4">
            Empowering Food Lovers to <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Share & Discover</span>
          </h1>

          <p className="text-xl opacity-90">
            Building a global community where every recipe tells a story.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
