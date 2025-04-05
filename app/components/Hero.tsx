'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Set isClient to true after component mounts to prevent hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const slides = [
    {
      
        image: '/images/IMG_1057.jpg',
        title: 'Vasudev Convention',
        subtitle: 'ELEGANCE & EXCELLENCE',
        description: 'Experience world-class venues designed for your grand celebrations.',
        cta: 'Discover Our Venues',
        link: '/venue'
      },
      {
        image: '/images/IMG_1086.jpg',
        title: 'DREAM WEDDINGS',
        subtitle: 'CHERISHED MOMENTS, LASTING MEMORIES',
        description: 'Celebrate love with a picture-perfect wedding in a breathtaking venue.',
        cta: 'Plan Your Wedding',
        link: '/services'
      },
      {
        image: '/images/IMG_1052.jpg',
        title: 'GRAND BANQUETS',
        subtitle: 'LUXURIOUS FEASTS, UNMATCHED HOSPITALITY',
        description: 'Indulge in a fine dining experience with exquisite cuisine and flawless service.',
        cta: 'Explore Our Banquets',
        link: '/banquets'
      }
      

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000); // 8 seconds per slide
    return () => clearInterval(interval);
  }, [slides.length]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const slideUp = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const slideDown = {
    hidden: { y: -60, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  // Text writing animation
  const textWriteAnimation = {
    hidden: { width: 0, opacity: 0 },
    visible: { 
      width: "100%", 
      opacity: 1,
      transition: { 
        duration: 1.2, 
        ease: "easeInOut" 
      }
    }
  };

  // Letter animation for title
  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Glowing text animation
  const glowAnimation = {
    initial: { textShadow: "0 0 0px rgba(123, 31, 162, 0)" },
    animate: {
      textShadow: [
        "0 0 4px rgba(123, 31, 162, 0.5)",
        "0 0 15px rgba(123, 31, 162, 0.8)",
        "0 0 4px rgba(123, 31, 162, 0.5)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Using a conditional return to prevent hydration issues
  if (typeof window === 'undefined' || !isClient) {
    return null; // Return null during SSR
  }

  // Create animated letters for title
  const animateTitle = (title: string) => {
    return title.split('').map((letter, index) => (
      <motion.span
        key={`letter-${index}`}
        variants={letterAnimation}
        className="inline-block"
        style={{ 
          textShadow: "0 0 20px rgba(123, 31, 162, 0.7)",
          display: letter === ' ' ? 'inline' : 'inline-block'
        }}
      >
        {letter}
      </motion.span>
    ));
  };

  return (
    <div className="relative h-screen overflow-hidden" ref={containerRef}>
      {/* Background Slider with Animation */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <motion.div
            key={`slide-${index}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1 : 1.1
            }}
            transition={{ 
              opacity: { duration: 1.2, ease: "easeInOut" },
              scale: { duration: 8, ease: "easeInOut" }
            }}
            className="absolute inset-0"
          >
            {/* Use onError handler for Image component */}
            <Image
              src={slide.image}
              alt={slide.title || `Slide ${index + 1}`}
              fill
              priority={index === 0}
              sizes="100vw"
              quality={100}
              loading={index === 0 ? "eager" : "lazy"}
              className="object-cover brightness-100"
              onError={(e) => {
                console.error(`Failed to load image: ${slide.image}`);
                e.currentTarget.src = '/images/fallback.jpg';
              }}
            />
            {/* Gradient overlay for better text visibility */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            />
            {/* Animated gradient overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10"
              animate={{ 
                opacity: [0.2, 0.3, 0.2],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 h-full flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        ref={slideRef}
      >
        <div className="text-center px-4 max-w-5xl">
          {/* Title with writing animation */}
          <motion.div 
            className="mb-2 relative z-10"
            variants={slideDown}
            key={`title-container-${currentSlide}`}
          >
            <div className="overflow-hidden">
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight"
                style={{ 
                  background: "linear-gradient(to right, #ffffff, #ffd700, #ff69b4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 30px rgba(255, 215, 0, 0.5)",
                  display: "inline-block"
                }}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                key={`title-${currentSlide}`}
              >
                {slides[currentSlide].title}
              </motion.h1>
            </div>
            
            {/* Animated underline */}
            <motion.div
              className="h-1.5 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 rounded-full mx-auto mt-2"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "80%", opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>
          
          {/* Subtitle with typewriter effect */}
          <motion.div 
            className="mb-6 relative z-10"
            variants={slideUp}
            key={`subtitle-container-${currentSlide}`}
          >
            <div className="overflow-hidden inline-block">
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold"
                style={{ 
                  background: "linear-gradient(to right, #ffd700, #ff69b4, #9370db)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
                  display: "inline-block"
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                key={`subtitle-${currentSlide}`}
              >
                {slides[currentSlide].subtitle}
              </motion.h2>
            </div>
            
            {/* Animated cursor */}
            <motion.div
              className="inline-block w-1 h-8 bg-gradient-to-b from-yellow-400 to-pink-500 ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.div>
          
          {/* Description with fade-in animation */}
          <motion.div 
            className="mb-10 relative z-10"
            variants={fadeIn}
            key={`desc-container-${currentSlide}`}
          >
            <motion.p 
              className="text-xl md:text-2xl font-medium text-white/90 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              {slides[currentSlide].description}
            </motion.p>
          </motion.div>
          
          {/* CTA Button with animation */}
          <motion.div 
            className="relative z-10"
            variants={slideUp}
          >
            <Link href={slides[currentSlide].link || '#'}>
              <motion.button 
                className="px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-white font-bold text-lg md:text-xl shadow-lg shadow-yellow-500/50 transform transition-all"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 25px rgba(255, 215, 0, 0.8)",
                  textShadow: "0 0 8px rgba(255, 255, 255, 0.8)"
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                {slides[currentSlide].cta}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Slider Indicators with animation */}
      <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <motion.button
            key={`indicator-${index}`}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all ${
              currentSlide === index ? 'w-12' : 'w-3'
            }`}
            style={{
              background: currentSlide === index 
                ? 'linear-gradient(to right, #ffd700, #ff69b4)' 
                : 'rgba(255, 255, 255, 0.5)',
              boxShadow: currentSlide === index ? '0 0 10px rgba(255, 215, 0, 0.7)' : 'none'
            }}
            whileHover={{ 
              scale: 1.2, 
              background: 'linear-gradient(to right, #ffd700, #ff69b4)',
              boxShadow: '0 0 10px rgba(255, 215, 0, 0.7)'
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div 
          className="w-8 h-12 rounded-full border-2 border-yellow-400/50 flex items-center justify-center"
          animate={{ boxShadow: ['0 0 0px rgba(255, 215, 0, 0.3)', '0 0 10px rgba(255, 215, 0, 0.5)', '0 0 0px rgba(255, 215, 0, 0.3)'] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div 
            className="w-1.5 h-3 bg-gradient-to-b from-yellow-400 to-pink-500 rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;