import React from 'react';
import { motion } from 'framer-motion';

/**
 * TabButton component for property tab navigation
 * @param {object} props - Component props
 * @param {boolean} props.active - Whether the tab is active
 * @param {function} props.onClick - Click handler
 * @param {React.ReactNode} props.icon - Icon to display
 * @param {string} props.label - Tab label text
 * @returns {JSX.Element} TabButton component
 */
const TabButton = ({ active, onClick, icon, label }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`
        flex items-center px-4 py-2 rounded-md font-medium whitespace-nowrap
        transition duration-200 min-w-max
        ${active 
          ? 'bg-deep-teal text-white shadow-md' 
          : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'}
      `}
      whileHover={!active ? { scale: 1.02 } : {}}
      whileTap={{ scale: 0.98 }}
    >
      {icon}
      {label}
    </motion.button>
  );
};

export default TabButton; 