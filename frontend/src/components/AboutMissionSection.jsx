import React from 'react';
import { Target, Globe, Users, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutMissionSection = () => {
  const goals = [
    { icon: Target, title: 'Build Community', description: 'Create spaces for meaningful interactions among food lovers.', color: 'text-blue-500', bgColor: 'from-blue-100 to-blue-200 dark:from-blue-900/20 dark:to-blue-800/20' },
    { icon: Globe, title: 'Promote Diversity', description: 'Showcase recipes from all cultures and cuisines.', color: 'text-green-500', bgColor: 'from-green-100 to-green-200 dark:from-green-900/20 dark:to-green-800/20' },
    { icon: Users, title: 'Empower Users', description: 'Provide tools for easy creation and collaboration.', color: 'text-purple-500', bgColor: 'from-purple-100 to-purple-200 dark:from-purple-900/20 dark:to-purple-800/20' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const goalVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Mission Statement */}
          <motion.div variants={leftVariants}>
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6 relative">
                Our Mission
                <motion.div 
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "4rem" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                At Recipedia, our mission is to connect food enthusiasts worldwide by providing a seamless platform for sharing, discovering, and preserving culinary traditions. We aim to inspire creativity in the kitchen and foster a supportive community where every cook feels empowered.
              </p>
            </div>
            
            <motion.div 
              className="relative"
              whileInView={{ scale: [0.95, 1.02, 1] }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Quote className="absolute -top-2 -left-2 w-8 h-8 text-red-500 opacity-50" />
              <blockquote className="border-l-4 border-red-500 pl-6 italic text-gray-700 dark:text-gray-200 text-lg font-medium bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-4 rounded-r-lg">
                "Food is the ingredient that binds us together."
                <cite className="block text-sm text-gray-500 dark:text-gray-400 mt-2 not-italic">– Recipedia Team</cite>
              </blockquote>
            </motion.div>
          </motion.div>

          {/* Platform Goals */}
          <motion.div variants={rightVariants}>
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center lg:text-left">
              Platform Goals
            </h3>
            <motion.div 
              className="space-y-8"
              variants={containerVariants}
            >
              {goals.map((goal, index) => {
                const Icon = goal.icon;
                return (
                  <motion.div
                    key={index}
                    variants={goalVariants}
                    whileHover={{ 
                      y: -4,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      transition: { duration: 0.2 }
                    }}
                    className="flex items-start gap-6 p-4 rounded-xl hover:bg-white dark:hover:bg-slate-700 transition-colors duration-300 cursor-pointer"
                  >
                    <motion.div 
                      className={`p-3 rounded-full bg-gradient-to-br ${goal.bgColor}`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <motion.div
                        whileHover={{
                          scale: [1, 1.2, 1],
                          transition: { duration: 0.3 }
                        }}
                      >
                        <Icon className={`w-8 h-8 ${goal.color}`} />
                      </motion.div>
                    </motion.div>
                    <div className="flex-1">
                      <motion.h4 
                        className="font-bold text-xl text-gray-800 dark:text-white mb-2 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {goal.title}
                      </motion.h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {goal.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMissionSection;
