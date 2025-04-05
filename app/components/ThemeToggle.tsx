'use client';

import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed left-4 top-20 z-50 p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="relative w-8 h-8"
      >
        <FaSun className="absolute inset-0 w-8 h-8 text-yellow-500 dark:opacity-0 transition-opacity duration-300" />
        <FaMoon className="absolute inset-0 w-8 h-8 text-gray-700 opacity-0 dark:opacity-100 transition-opacity duration-300" />
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle; 