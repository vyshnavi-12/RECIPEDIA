import React from 'react';
import AboutHero from '../components/AboutHeroSection';
import MissionSection from '../components/AboutMissionSection';
import FeaturesSection from '../components/AboutFeaturesSection';
import ValuesSection from '../components/AboutValuesSection';
import AboutCTA from '../components/AboutCTASection';
import '../styles/About.css';

const About = () => {
  return (
    <div className="mt-28 dark:bg-slate-700 transition-colors duration-300">
      <AboutHero />
      <MissionSection />
      <FeaturesSection />
      <ValuesSection />
      <AboutCTA />
    </div>
  );
};

export default About;
