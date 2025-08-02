import React, { useEffect, useRef, useState } from 'react';
import { Star, Share2, Edit2, Heart, Search } from 'lucide-react';

const features = [
  { icon: Share2, title: 'Share Recipes', description: 'Upload and showcase your creations with the community.' },
  { icon: Search, title: 'Explore Cuisines', description: 'Discover diverse recipes from around the world.' },
  { icon: Edit2, title: 'Edit Anytime', description: 'Update or remove your recipes easily.' },
  { icon: Heart, title: 'Interact & Like', description: 'Engage by liking and commenting.' },
  { icon: Star, title: 'Save Favorites', description: 'Bookmark recipes for quick access.' },
];

const AboutFeaturesSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`p-6 rounded-2xl bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/30 dark:to-pink-900/30 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Icon className="w-12 h-12 text-red-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutFeaturesSection;
