import React from 'react';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutCTASection = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-red-600 via-rose-700 to-rose-800 text-white text-center overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-pink-400 to-red-300 rounded-full blur-2xl opacity-20"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div 
        className="absolute top-1/2 right-20 w-24 h-24 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full blur-xl opacity-25"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />
      <motion.div 
        className="absolute bottom-20 left-1/3 w-40 h-40 bg-gradient-to-r from-red-300 to-pink-300 rounded-full blur-3xl opacity-15"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 4 }}
      />
      
      {/* Floating Icons */}
      <motion.div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-1/4"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Sparkles className="w-6 h-6 text-yellow-300" />
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-1/4"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Heart className="w-5 h-5 text-pink-300" />
        </motion.div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            variants={itemVariants}
          >
            Join the{' '}
            <motion.span 
              className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"
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
              Recipedia Community
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-lg opacity-90 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Start sharing your recipes and connecting with fellow foodies today.
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <Link to="/register">
              <motion.div
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 font-bold rounded-full shadow-lg cursor-pointer"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  backgroundColor: "rgb(254 242 242)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Get Started
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTASection;
