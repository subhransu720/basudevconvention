'use client';

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';

interface LightboxProps {
  image: {
    src: string;
    alt: string;
    title: string;
  };
  onClose: () => void;
}

const Lightbox = ({ image, onClose }: LightboxProps) => {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [handleKeyDown]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="relative max-w-7xl w-full max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
        >
          <FaTimes size={24} />
        </button>
        <div className="relative aspect-w-16 aspect-h-9">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain"
            priority
            quality={90}
          />
        </div>
        <div className="mt-4 text-center">
          <h3 className="text-white text-xl font-medium">{image.title}</h3>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Lightbox; 