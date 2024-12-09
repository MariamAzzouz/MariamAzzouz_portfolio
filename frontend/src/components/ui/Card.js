import React from 'react';
import { motion } from 'framer-motion';

function Card({ 
  children, 
  variant = 'default',
  hover = true,
  className = '',
  ...props 
}) {
  const variants = {
    default: "bg-gray-800/50 backdrop-blur-sm",
    solid: "bg-gray-800",
    gradient: "bg-gradient-to-br from-gray-800 to-gray-900"
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = hover ? {
    hover: {
      y: -5,
      transition: {
        duration: 0.2
      }
    }
  } : {};

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={hover ? "hover" : undefined}
      className={`
        rounded-xl p-6 shadow-xl
        ${variants[variant]}
        ${hover ? 'transition-all duration-300' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default Card; 