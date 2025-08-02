import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-600 to-rose-800 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Join the Recipedia Community</h2>
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
          Start sharing your recipes and connecting with fellow foodies today.
        </p>
        <Link
          to="/register"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 font-bold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          Get Started
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default AboutCTASection;
