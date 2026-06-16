import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable Card component with hover effects
 */
const Card = ({
  children,
  className = '',
  hover = true,
  padding = 'p-6',
  onClick,
  animate = true,
}) => {
  const Wrapper = animate ? motion.div : 'div';
  const animProps = animate
    ? {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4 },
      }
    : {};

  return (
    <Wrapper
      onClick={onClick}
      {...animProps}
      className={`
        bg-white dark:bg-surface-800 rounded-2xl
        border border-surface-100 dark:border-surface-700
        shadow-soft ${padding}
        ${hover ? 'card-hover cursor-pointer' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </Wrapper>
  );
};

export default Card;
