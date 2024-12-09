import React from 'react';
import { motion } from 'framer-motion';

function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  isLoading = false,
  disabled = false,
  onClick,
  ...props 
}) {
  const baseStyles = "font-semibold rounded-lg transition-all duration-200 flex items-center justify-center";
  
  const variants = {
    primary: "bg-lime-400 text-gray-900 hover:bg-lime-300",
    secondary: "bg-gray-700 text-gray-100 hover:bg-gray-600",
    outline: "border-2 border-lime-400 text-lime-400 hover:bg-lime-400/10",
    ghost: "text-gray-300 hover:text-lime-400 hover:bg-lime-400/10"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <motion.button
      variants={variants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      disabled={disabled || isLoading}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      onClick={onClick}
      {...props}
    >
      {isLoading ? (
        <svg 
          className="animate-spin -ml-1 mr-3 h-5 w-5" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : null}
      {children}
    </motion.button>
  );
}

export default Button; 