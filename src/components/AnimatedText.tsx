import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  type?: 'slide' | 'fade' | 'zoom' | 'rotate';
}

export function AnimatedText({ children, className = '', type = 'slide' }: AnimatedTextProps) {
  const animations = {
    slide: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    },
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.3, ease: 'easeInOut' }
    },
    zoom: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 },
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    },
    rotate: {
      initial: { opacity: 0, rotate: -90 },
      animate: { opacity: 1, rotate: 0 },
      exit: { opacity: 0, rotate: 90 },
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    }
  };

  const selectedAnimation = animations[type];

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={React.Children.toArray(children).join('')}
        {...selectedAnimation}
        className={className}
      >
        {children}
      </motion.span>
    </AnimatePresence>
  );
}