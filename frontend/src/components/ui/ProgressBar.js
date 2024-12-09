import React from 'react';
import { motion } from 'framer-motion';

function ProgressBar({
  value = 0,
  max = 100,
  label,
  showValue = true,
  size = 'md',
  variant = 'default',
  animated = true,
  className = ''
}) {
  const percentage = (value / max) * 100;

  const sizes = {
    sm: 'h-1',
    md: 'h-2.5',
    lg: 'h-4'
  };

  const variants = {
    default: 'bg-lime-400',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500',
    gradient: 'bg-gradient-to-r from-lime-400 to-emerald-400'
  };

  return (
    <div className={className}>
      {label && (
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-300">
            {label}
          </span>
          {showValue && (
            <span className="text-sm font-medium text-gray-400">
              {value}%
            </span>
          )}
        </div>
      )}
      <div className={`w-full bg-gray-700 rounded-full ${sizes[size]}`}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={animated ? { 
            duration: 1,
            ease: "easeOut"
          } : { duration: 0 }}
          className={`
            ${sizes[size]}
            ${variants[variant]}
            rounded-full
            transition-all
            duration-300
          `}
        />
      </div>
    </div>
  );
}

export default ProgressBar; 