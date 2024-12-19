import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className="min-h-screen pt-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-white mb-6"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-300 mb-6"
            >
              I'm a passionate AI & Data Scientist with expertise in machine learning,
              deep learning, and data analysis, With a strong background in both theoretical
              and practical aspects of AI.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              <div>
                <h3 className="text-lime-400 font-bold mb-2">Education</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>Engineering degree in Telecommunications with a specialization in datascience</li>
                  <li>Pre-engineering studies in Mathematics and Physics</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lime-400 font-bold mb-2">Experience</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>1 Year in ML/AI through interships and academic projects</li>
                  <li>3+ Major Projects</li>
                </ul>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden">
              <img
                src="/about-image.jpg" // Add your image here
                alt="About Me"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About; 