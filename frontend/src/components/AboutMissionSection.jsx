import React, { useEffect, useRef, useState } from 'react';
import { Target, Globe, Users } from 'lucide-react';

const AboutMissionSection = () => {
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Mission Statement */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              At Recipedia, our mission is to connect food enthusiasts worldwide by providing a seamless platform for sharing, discovering, and preserving culinary traditions. We aim to inspire creativity in the kitchen and foster a supportive community where every cook feels empowered.
            </p>
            <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-700 dark:text-gray-200">
              "Food is the ingredient that binds us together." – Recipedia Team
            </blockquote>
          </div>

          {/* Platform Goals */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Platform Goals</h3>
            <div className="flex items-start gap-4">
              <Target className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Build Community</h4>
                <p className="text-gray-600 dark:text-gray-300">Create spaces for meaningful interactions among food lovers.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Globe className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Promote Diversity</h4>
                <p className="text-gray-600 dark:text-gray-300">Showcase recipes from all cultures and cuisines.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Users className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Empower Users</h4>
                <p className="text-gray-600 dark:text-gray-300">Provide tools for easy creation and collaboration.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionSection;
