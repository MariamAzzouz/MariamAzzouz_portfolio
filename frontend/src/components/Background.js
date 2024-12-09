import React from 'react';
import { motion } from 'framer-motion';

function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 90, 180],
          borderRadius: ["60% 40% 30% 70%", "30% 60% 70% 40%", "60% 40% 30% 70%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute -top-4 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
        animate={{
          scale: [1.3, 1, 1.3],
          rotate: [180, 90, 0],
          borderRadius: ["30% 60% 70% 40%", "60% 40% 30% 70%", "30% 60% 70% 40%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, -180],
          borderRadius: ["60% 40% 30% 70%", "30% 60% 70% 40%", "60% 40% 30% 70%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />
    </div>
  );
}

export default Background; 