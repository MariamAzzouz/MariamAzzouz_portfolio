import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Hero() {
  const stats = [
    { value: "15+", label: "ML Projects" },
    { value: "25+", label: "Data Analysis" },
    { value: "98%", label: "Client Satisfaction" }
  ];

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Neural network animation background */}
      <div className="absolute inset-0">
        <div className="neural-network-animation opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/90"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="text-lime-400 font-mono mb-4 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              &lt;Hello, World! /&gt;
            </motion.div>
            
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              I'm Mariam
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400 mt-2">
                AI & Data Scientist
              </span>
            </motion.h1>

            <motion.p 
              className="text-gray-300 text-lg mb-8 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Transforming complex data into actionable insights through 
              machine learning and artificial intelligence solutions.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {/* View Projects Button */}
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-lime-400 text-gray-900 rounded-full font-semibold hover:bg-lime-300 transition-all"
                >
                  View Projects
                </motion.button>
              </Link>

              {/* Download CV Button */}
              <a
                href="http://localhost:4000/download_cv"  // Ensure this URL is correct
                onClick={(e) => {
                  console.log('Download button clicked');  // Debugging line
                }}
                download
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-lime-400 text-lime-400 rounded-full font-semibold hover:bg-lime-400/10 transition-all"
                >
                  Download CV
                </motion.button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats & Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <motion.div 
                className="w-[500px] h-[500px] rounded-full bg-gradient-to-r from-lime-400/20 to-emerald-400/20 blur-3xl absolute -top-20 -right-20"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="glass p-6 rounded-2xl text-center"
                  >
                    <div className="text-3xl font-bold text-lime-400 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-300">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tech Stack */}
              <motion.div 
                className="flex justify-center gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {['python', 'tensorflow', 'pytorch', 'scikit-learn'].map((tech, index) => (
                  <motion.img
                    key={tech}
                    src={`/icons/${tech}.svg`}
                    alt={tech}
                    className="w-12 h-12 opacity-70 hover:opacity-100 transition-opacity"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 0.7, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <svg
          className="w-6 h-6 text-lime-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </div>
  );
}

export default Hero; 