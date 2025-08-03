import React from 'react';
import { Star, Share2, Edit2, Heart, Search, ChefHat, BookOpen, Users, Trophy, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { 
    icon: Share2, 
    decorativeIcon: Sparkles,
    title: 'Share Recipes', 
    description: 'Upload and showcase your culinary masterpieces with our vibrant cooking community.', 
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20'
  },
  { 
    icon: Search, 
    decorativeIcon: BookOpen,
    title: 'Discover Cuisines', 
    description: 'Explore authentic recipes from every corner of the world and expand your culinary horizons.', 
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
  },
  { 
    icon: Edit2, 
    decorativeIcon: ChefHat,
    title: 'Perfect Your Recipes', 
    description: 'Easily update, refine, and perfect your recipes as you master new techniques.', 
    gradient: 'from-purple-500 to-indigo-500',
    bgGradient: 'from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20'
  },
  { 
    icon: Heart, 
    decorativeIcon: Users,
    title: 'Connect & Engage', 
    description: 'Build meaningful connections through likes, comments, and culinary conversations.', 
    gradient: 'from-pink-500 to-rose-500',
    bgGradient: 'from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20'
  },
  { 
    icon: Star, 
    decorativeIcon: Trophy,
    title: 'Curate Favorites', 
    description: 'Create personalized collections of your most treasured recipes for quick access.', 
    gradient: 'from-yellow-500 to-orange-500',
    bgGradient: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20'
  },
];

const AboutFeaturesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.7, 
        ease: "easeOut",
        type: "spring",
        stiffness: 120
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: (i) => ({
      y: [0, -8, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 3 + i * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.3
      }
    })
  };

  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <motion.div 
        className="absolute top-16 left-8 w-20 h-20 bg-gradient-to-r from-red-300/30 to-pink-300/30 rounded-full blur-xl"
        variants={floatingVariants}
        animate="animate"
        custom={0}
      />
      <motion.div 
        className="absolute bottom-16 right-8 w-24 h-24 bg-gradient-to-r from-blue-300/30 to-cyan-300/30 rounded-full blur-xl"
        variants={floatingVariants}
        animate="animate"
        custom={1}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleVariants}
        >
          <motion.h2 
            className="text-5xl font-bold text-gray-800 dark:text-white mb-4"
            whileInView={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Powerful Features for
            <span className="block bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 bg-clip-text text-transparent mt-2">
              Food Enthusiasts
            </span>
          </motion.h2>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            transition={{ duration: 1.2, delay: 0.5 }}
            viewport={{ once: true }}
          />
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the tools that make Recipedia the ultimate destination for cooking enthusiasts, 
            recipe creators, and food lovers worldwide.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const DecorativeIcon = feature.decorativeIcon;
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -20,
                  scale: 1.08,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.3 }
                }}
                className={`relative p-6 rounded-3xl bg-gradient-to-br ${feature.bgGradient} shadow-lg cursor-pointer overflow-hidden group border border-white/50 dark:border-slate-600/50`}
              >
                {/* Animated Background Gradient */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.08 }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Decorative Corner Element */}
                <motion.div 
                  className="absolute top-3 right-3 opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 15,
                    transition: { duration: 0.2 }
                  }}
                >
                  <DecorativeIcon className={`w-6 h-6 text-gray-400 dark:text-gray-500`} />
                </motion.div>
                
                {/* Floating Dots */}
                <motion.div 
                  className="absolute bottom-4 left-4 flex gap-1"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {[0, 1, 2].map((dot) => (
                    <motion.div
                      key={dot}
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} opacity-60`}
                      animate={{
                        scale: [1, 1.2, 1],
                        transition: {
                          duration: 2,
                          repeat: Infinity,
                          delay: dot * 0.2
                        }
                      }}
                    />
                  ))}
                </motion.div>
                
                <div className="relative z-10">
                  {/* Main Icon with Enhanced Animations */}
                  <motion.div 
                    className="mb-6 relative"
                    whileHover={{ 
                      scale: 1.15,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div
                      className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${feature.gradient} p-4 shadow-lg relative`}
                      whileHover={{
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                        rotate: [0, -3, 3, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      {/* Glow effect */}
                      <motion.div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} blur-xl opacity-0 group-hover:opacity-30`}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <motion.div
                        whileHover={{
                          scale: [1, 1.3, 1],
                          rotate: [0, 10, -10, 0],
                          transition: { duration: 0.6 }
                        }}
                        className="relative z-10"
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  
                  {/* Content */}
                  <motion.h3 
                    className="text-lg font-bold text-gray-800 dark:text-white text-center mb-3 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300"
                    whileHover={{ 
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                  >
                    {feature.title}
                  </motion.h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 text-center leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                  {/* Bottom Accent Line */}
                  <motion.div 
                    className={`mt-4 h-0.5 bg-gradient-to-r ${feature.gradient} rounded-full mx-auto`}
                    initial={{ width: 0 }}
                    whileHover={{ width: "80%" }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutFeaturesSection;
