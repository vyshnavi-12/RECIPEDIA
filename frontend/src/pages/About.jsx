import React from 'react';
import { motion } from 'framer-motion';
import AboutHero from '../components/AboutHeroSection';
import MissionSection from '../components/AboutMissionSection';
import FeaturesSection from '../components/AboutFeaturesSection';
import ValuesSection from '../components/AboutValuesSection';
import AboutCTA from '../components/AboutCTASection';

const About = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8
  };

  return (
    <motion.div 
      className="mt-25 dark:bg-slate-700 transition-colors duration-300"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <AboutHero />
      <MissionSection />
      <FeaturesSection />
      <ValuesSection />
      <AboutCTA />
    </motion.div>
  );
};

export default About;
