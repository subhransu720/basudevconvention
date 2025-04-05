'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';

// Dynamically import icons
const FaBars = dynamic(() => import('react-icons/fa').then(mod => mod.FaBars), { ssr: false });
const FaTimes = dynamic(() => import('react-icons/fa').then(mod => mod.FaTimes), { ssr: false });
const FaHome = dynamic(() => import('react-icons/fa').then(mod => mod.FaHome), { ssr: false });
const FaInfoCircle = dynamic(() => import('react-icons/fa').then(mod => mod.FaInfoCircle), { ssr: false });
const FaCogs = dynamic(() => import('react-icons/fa').then(mod => mod.FaCogs), { ssr: false });
const FaBuilding = dynamic(() => import('react-icons/fa').then(mod => mod.FaBuilding), { ssr: false });
const FaImages = dynamic(() => import('react-icons/fa').then(mod => mod.FaImages), { ssr: false });
const FaQuestionCircle = dynamic(() => import('react-icons/fa').then(mod => mod.FaQuestionCircle), { ssr: false });
const FaEnvelope = dynamic(() => import('react-icons/fa').then(mod => mod.FaEnvelope), { ssr: false });

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  const navItems = [
    { name: 'Home', icon: FaHome, color: 'from-yellow-400 to-yellow-600' },
    { name: 'About', icon: FaInfoCircle, color: 'from-blue-400 to-blue-600' },
    { name: 'Services', icon: FaCogs, color: 'from-green-400 to-green-600' },
    { name: 'Venue', icon: FaBuilding, color: 'from-purple-400 to-purple-600' },
    { name: 'Gallery', icon: FaImages, color: 'from-pink-400 to-pink-600' },
    { name: 'FAQ', icon: FaQuestionCircle, color: 'from-red-400 to-red-600' },
    { name: 'Contact', icon: FaEnvelope, color: 'from-indigo-400 to-indigo-600' }
  ];

  const navAnimation = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0 },
  };

  if (!mounted) return null;

  return (
    <div className="relative">
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-gradient-to-r from-gray-900/95 to-gray-800/95 dark:from-gray-900/95 dark:to-gray-800/95 backdrop-blur-md py-4'
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          <motion.div variants={itemAnimation}>
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">
                Vasudev Convention
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                href={item.name === 'Home' ? '/' : `/${item.name.toLowerCase()}`} 
                className={`font-medium relative group ${
                  scrolled ? 'text-gray-800 dark:text-white' : 'text-white'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            <Link 
              href="/contact" 
              className="px-6 py-2.5 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-white rounded-md hover:opacity-90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-3 rounded-full bg-black text-white text-2xl focus:outline-none shadow-lg hover:shadow-xl transition-all duration-300`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black z-50"
            >
              <div className="h-screen flex flex-col justify-start items-center pt-20 px-4">
                <button 
                  className="absolute top-6 right-6 p-3 rounded-full bg-black text-white text-3xl hover:text-gray-300 transition-colors focus:outline-none shadow-lg"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <FaTimes />
                </button>
                
                <div className="flex flex-col space-y-2 w-full max-w-xs">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link 
                        href={item.name === 'Home' ? '/' : `/${item.name.toLowerCase()}`} 
                        className={`flex items-center space-x-2 px-3 py-2 rounded-md bg-gradient-to-br ${item.color} text-white shadow-md hover:shadow-lg transition-all duration-300`}
                        onClick={closeMenu}
                      >
                        <div className="p-1.5 rounded bg-white/10">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium">{item.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="mt-4 w-full max-w-xs"
                >
                  <Link 
                    href="/contact" 
                    className="w-full px-4 py-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-white rounded-md text-sm font-medium hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                    onClick={closeMenu}
                  >
                    Book Now
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar; 