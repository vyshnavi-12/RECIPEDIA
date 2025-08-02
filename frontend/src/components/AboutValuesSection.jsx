import React from 'react';
import { HeartHandshake, Sparkles, Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
  { 
    icon: HeartHandshake, 
    title: 'Community First', 
    description: 'We prioritize connections and shared experiences.',
    gradient: 'from-pink-500 to-rose-500',
    bgGradient: 'from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20'
  },
  { 
    icon: Sparkles, 
    title: 'Innovation', 
    description: 'Constantly improving tools for better creativity.',
    gradient: 'from-yellow-500 to-orange-500',
    bgGradient: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20'
  },
  { 
    icon: Globe2, 
    title: 'Inclusivity', 
    description: 'Welcoming all cultures and skill levels.',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20'
  },
];

const AboutValuesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  const floatingBgVariants = {
    animate: (i) => ({
      y: [0, -10, 0],
      x: [0, 5, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 6 + i,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 2
      }
    })
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-red-200 to-pink-200 rounded-full blur-3xl opacity-30"
        variants={floatingBgVariants}
        animate="animate"
        custom={0}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-20"
        variants={floatingBgVariants}
        animate="animate"
        custom={1}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
            Why Choose{' '}
            <motion.span 
              className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Recipedia
            </motion.span>
            ?
          </h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our app fosters a vibrant community where food unites people. With user-friendly tools and a focus on inspiration, we help you turn every meal into a masterpiece.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -12,
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.3 }
                }}
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${value.bgGradient} shadow-lg cursor-pointer overflow-hidden group`}
              >
                {/* Hover Overlay */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-r ${value.gradient} rounded-2xl`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.05 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Animated Border */}
                <motion.div 
                  className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${value.gradient} p-0.5`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full rounded-xl bg-white dark:bg-slate-700" />
                </motion.div>

                <div className="relative z-10">
                  {/* Icon with Enhanced Animation */}
                  <motion.div 
                    className="mb-6"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 3,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div 
                      className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${value.gradient} p-4 shadow-lg`}
                      whileHover={{
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                      }}
                    >
                      <motion.div
                        whileHover={{
                          scale: [1, 1.2, 1],
                          transition: { duration: 0.4 }
                        }}
                      >
                        <Icon className="w-12 h-12 text-white" />
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Content */}
                  <motion.h3 
                    className="text-xl font-bold text-gray-800 dark:text-white text-center mb-4 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {value.title}
                  </motion.h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                    {value.description}
                  </p>

                  {/* Bottom Accent */}
                  <motion.div 
                    className={`mt-6 h-1 bg-gradient-to-r ${value.gradient} rounded-full mx-auto`}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.5 }}
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

export default AboutValuesSection;
