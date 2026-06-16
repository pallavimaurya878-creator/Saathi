import React from 'react';
import { motion } from 'framer-motion';

/**
 * Loading spinner / skeleton loader
 */
const Loader = ({ type = 'spinner', text = 'Loading...', size = 'md' }) => {
  if (type === 'skeleton') {
    return (
      <div className="space-y-4 w-full animate-pulse">
        <div className="h-4 bg-surface-200 dark:bg-surface-700 rounded-lg w-3/4" />
        <div className="h-4 bg-surface-200 dark:bg-surface-700 rounded-lg w-1/2" />
        <div className="h-32 bg-surface-200 dark:bg-surface-700 rounded-2xl" />
        <div className="h-4 bg-surface-200 dark:bg-surface-700 rounded-lg w-2/3" />
      </div>
    );
  }

  const sizes = { sm: 'h-6 w-6', md: 'h-10 w-10', lg: 'h-16 w-16' };

  return (
    <div className="flex flex-col items-center justify-center py-12 gap-4">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className={`${sizes[size]} border-3 border-surface-200 border-t-primary-500 rounded-full`}
        style={{ borderWidth: '3px' }}
      />
      {text && (
        <p className="text-sm text-surface-500 dark:text-surface-400 animate-pulse">{text}</p>
      )}
    </div>
  );
};

export default Loader;
