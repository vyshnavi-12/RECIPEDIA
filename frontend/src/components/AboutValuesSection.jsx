import React, { useEffect, useRef, useState } from 'react';
import { HeartHandshake, Sparkles, Globe2 } from 'lucide-react';

const values = [
  { icon: HeartHandshake, title: 'Community First', description: 'We prioritize connections and shared experiences.' },
  { icon: Sparkles, title: 'Innovation', description: 'Constantly improving tools for better creativity.' },
  { icon: Globe2, title: 'Inclusivity', description: 'Welcoming all cultures and skill levels.' },
];

const AboutValuesSection = () => {
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
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-12">Why Choose Recipedia?</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12">
          Our app fosters a vibrant community where food unites people. With user-friendly tools and a focus on inspiration, we help you turn every meal into a masterpiece.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className={`p-8 rounded-2xl bg-white dark:bg-slate-700 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <Icon className="w-16 h-16 text-red-500 mb-6 mx-auto" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white text-center mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutValuesSection;
