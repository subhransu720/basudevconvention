'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

const FloatingButtons = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919861171001', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:by-vasudevconvention25@gmail.com';
  };

  const handleCall = () => {
    window.location.href = 'tel:+919861171001';
  };

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.button
        onClick={handleWhatsApp}
        className="p-4 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 relative group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <FaWhatsapp className="w-6 h-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-3 py-1 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
          WhatsApp
        </span>
      </motion.button>

      {/* Email Button */}
      <motion.button
        onClick={handleEmail}
        className="p-4 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 relative group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <FaEnvelope className="w-6 h-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-3 py-1 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
          Email
        </span>
      </motion.button>

      {/* Call Button */}
      <motion.button
        onClick={handleCall}
        className="p-4 rounded-full bg-gradient-to-br from-red-400 to-red-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 relative group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <FaPhone className="w-6 h-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-3 py-1 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
          Call
        </span>
      </motion.button>
    </div>
  );
};

export default FloatingButtons; 