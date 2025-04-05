'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaSearch, FaTimes } from 'react-icons/fa';

// Dynamically import icons
const FaArrowRight = dynamic(() => import('react-icons/fa').then(mod => mod.FaArrowRight), { ssr: false });
const FaArrowLeft = dynamic(() => import('react-icons/fa').then(mod => mod.FaArrowLeft), { ssr: false });
const FaMapMarkerAlt = dynamic(() => import('react-icons/fa').then(mod => mod.FaMapMarkerAlt), { ssr: false });
const FaGem = dynamic(() => import('react-icons/fa').then(mod => mod.FaGem), { ssr: false });
const FaUtensils = dynamic(() => import('react-icons/fa').then(mod => mod.FaUtensils), { ssr: false });
const FaGlassCheers = dynamic(() => import('react-icons/fa').then(mod => mod.FaGlassCheers), { ssr: false });
const FaCalendarAlt = dynamic(() => import('react-icons/fa').then(mod => mod.FaCalendarAlt), { ssr: false });
const MdOutline360 = dynamic(() => import('react-icons/md').then(mod => mod.MdOutline360), { ssr: false });
const IoMdCompass = dynamic(() => import('react-icons/io').then(mod => mod.IoMdCompass), { ssr: false });
const BiMap = dynamic(() => import('react-icons/bi').then(mod => mod.BiMap), { ssr: false });
const GiCrystalBall = dynamic(() => import('react-icons/gi').then(mod => mod.GiCrystalBall), { ssr: false });
const GiPartyPopper = dynamic(() => import('react-icons/gi').then(mod => mod.GiPartyPopper), { ssr: false });

const galleryImages = [
  {
    id: 1,
    src: '/images/optimized_IMG_1057.jpg',
    category: 'Wedding',
    title: 'Marriage Stage Decoration',
  },
  {
    id: 2,
    src: '/images/optimized_Haldi.png',
    category: 'Haldi',
    title: 'Haldi Ceremony',
  },
  {
    id: 3,
    src: '/images/optimized_Mehendi.png',
    category: 'Mehendi',
    title: 'Mehendi Ceremony',
  },
  {
    id: 4,
    src: '/images/optimized_image copy 2.png',
    category: 'Wedding',
    title: 'Wedding Reception',
  },
  {
    id: 5,
    src: '/images/optimized_birthdayorg.png',
    category: 'Birthday Party',
    title: 'Birthday Party',
  },
  {
    id: 6,
    src: '/images/optimized_IMG_1032.jpg',
    category: 'Hall',
    title: 'Hall',
  },
  {
    id: 7,
    src: '/images/optimized_IMG_1036.jpg',
    category: 'Venue',
    title: 'Second Hall',
  },
  {
    id: 8,
    src: '/images/optimized_IMG_1017.jpg',
    category: 'dinner area ',
    title: 'Large dinner Area',
  },
  {
    id: 9,
    src: '/images/optimized_elevate.png',
    category: 'Elevate',
    title: 'Elevate',
  },
  {
    id: 10,
    src: '/images/optimized_IMG_1074.jpg',
    category: 'Room',
    title: 'Luxurious Room ',
  },
  {
    id: 11,
    src: '/images/optimized_IMG_1057.jpg',
    category: 'Venue',
    title: 'Main Hall',
  },
  {
    id: 12,
    src: '/images/optimized_image copy.png',
    category: 'Venue',
    title: 'stage Decoration',
  },
  {
    id: 13,
    src: '/images/optimized_image copy 3.png',
    category: 'Venue',
    title: 'Hall Decoration',
  },
  {
    id: 14,
    src: '/images/optimized_IMG_1086.jpg',
    category: 'Venue',
    title: 'Entrance Decoration',
  },
  {
    id: 15,
    src: '/images/optimized_image copy 4.png',
    category: 'Stage',
    title: 'stage decoration',
  },
  {
    id: 16,
    src: '/images/optimized_IMG_1082.jpg',
    category: 'Venue',
    title: 'Rooms',
  },
  {
    id: 17,
    src: '/images/optimized_IMG_1090.jpg',
    category: 'Venue',
    title: 'Outside View',
  },
  {
    id: 18,
    src: '/images/optimized_IMG_1093.jpg',
    category: 'Venue',
    title: 'Outside View',
  },
  {
    id: 19,
    src: '/images/optimized_IMG_1101.jpg',
    category: 'Venue',
    title: 'Outside View',
  },
  {
    id: 20,
    src: '/images/optimized_IMG_1082.jpg',
    category: 'Venue',
    title: 'Rooms',
  },
  {
    id: 21,
    src: '/images/optimized_IMG_1022.jpg',
    category: 'Venue',
    title: 'Dinner Area ',
  },
  {
    id: 22,
    src: '/images/optimized_IMG_1027.jpg',
    category: 'Venue',
    title: 'Dinner Area ',
  },
  {
    id: 23,
    src: '/images/optimized_IMG_1029.jpg',
    category: 'Venue',
    title: 'Lights',
  },
  {
    id: 24,
    src: '/images/optimized_IMG_1044.jpg',
    category: 'Venue',
    title: 'Seating Arrangement',
  },
  {
    id: 25,
    src: '/images/optimized_IMG_1052.jpg',
    category: 'Venue',
    title: 'Wedding stage',
  },
  {
    id: 26,
    src: '/images/optimized_IMG_1056.jpg',
    category: 'Venue',
    title: 'Hall ',
  },
  {
    id: 27,
    src: '/images/optimized_IMG_1058.jpg',
    category: 'Venue',
    title: ' Wedding Hall ',
  },
  {
    id: 28,
    src: '/images/optimized_IMG_1062.jpg',
    category: 'Venue',
    title: 'Conference Hall ',
  },
  {
    id: 29,
    src: '/images/optimized_IMG_1079.jpg',
    category: 'Venue',
    title: 'Luxury Rooms',
  },
  {
    id: 30,
    src: '/images/optimized_IMG_1088.jpg',
    category: 'Venue',
    title: 'Entry',
  },
];

// Fix Set iteration by converting to array
const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];

export default function GalleryContent() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredImages = galleryImages.filter(img => {
    const matchesCategory = selectedCategory === 'All' || img.category === selectedCategory;
    const matchesSearch = img.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         img.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleImageClick = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
    setCurrentIndex(filteredImages.findIndex(img => img.id === image.id));
  };

  const handleNext = () => {
    if (currentIndex < filteredImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedImage(filteredImages[currentIndex + 1]);
    } else {
      setCurrentIndex(0);
      setSelectedImage(filteredImages[0]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(filteredImages[currentIndex - 1]);
    } else {
      setCurrentIndex(filteredImages.length - 1);
      setSelectedImage(filteredImages[filteredImages.length - 1]);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <main>
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] w-full">
        <Image
          src="/images/optimized_IMG_1057.jpg"
          alt="Vasudev Convention Gallery"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#4b0082]/80 via-[#6a0dad]/70 to-[#8a2be2]/60 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <motion.h1 
              className="heading-primary mb-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{ 
                textShadow: "0 0 15px rgba(212, 175, 55, 0.7)",
                background: "linear-gradient(to right, #ffffff, #d4af37)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Our Gallery
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Browse through our collection of memorable events and beautiful venues
            </motion.p>
            <motion.div
              className="h-1 bg-gradient-to-r from-[#d4af37] to-[#f5e7a3] rounded-full mx-auto mt-4 w-0"
              initial={{ width: 0 }}
              animate={{ width: "180px" }}
              transition={{ delay: 0.5, duration: 1 }}
            />
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        {isClient && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div 
                key={i}
                className="absolute rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 50 + 20}px`,
                  height: `${Math.random() * 50 + 20}px`,
                  background: `rgba(255, 255, 255, ${Math.random() * 0.1})`,
                }}
              />
            ))}
          </div>
        )}
      </div>
      
      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search images..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3 text-gray-400 hover:text-white"
              >
                <FaTimes />
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer"
                onClick={() => handleImageClick(image)}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  quality={75}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/90 via-[#4b0082]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
                  <p className="text-purple-300">{image.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Virtual Tour Experience (Replacing Video Gallery) */}
      <section className="section-padding bg-gradient-to-b from-[#1a1a3a] to-[#0a0a1a]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-secondary mb-2" style={{ 
                background: "linear-gradient(to right, #d4af37, #f5e7a3, #d4af37)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 10px rgba(212, 175, 55, 0.3)"
              }}>Virtual Tour Experience</h2>
              <h3 className="heading-tertiary mb-6 text-white">Explore Our Venue From Anywhere</h3>
              <p className="max-w-3xl mx-auto text-gray-300">
                Take a virtual journey through our premium spaces and immersive environments.
                Experience the grandeur of Vasudev Convention before your visit.
              </p>
              <motion.div
                className="h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent rounded-full mx-auto mt-6 w-32"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "120px", opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              />
            </motion.div>
          </div>
          
          {/* Featured Spaces */}
          <div className="mb-16">
            <motion.h4 
              className="text-[#d4af37] text-xl font-medium mb-8 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Featured Spaces
            </motion.h4>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div 
                className="relative h-[400px] rounded-xl overflow-hidden group cursor-pointer"
                variants={item}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.4), 0 0 15px rgba(212, 175, 55, 0.3)"
                }}
              >
                <Image
                  src="/images/optimized_IMG_1057.jpg"
                  alt="Grand Ballroom"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  quality={75}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/90 via-[#4b0082]/60 to-transparent flex flex-col justify-end p-6">
                  <MdOutline360 className="text-4xl text-[#d4af37] mb-2" />
                  <h5 className="text-2xl font-bold text-white mb-1">Grand Ballroom</h5>
                  <p className="text-gray-300 mb-4">Our largest event space with elegant design and state-of-the-art facilities</p>
                  <motion.button 
                    className="px-4 py-2 rounded-full bg-[#d4af37] text-[#0a0a1a] font-semibold inline-flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <BiMap />
                    <span>Explore Now</span>
                  </motion.button>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative h-[400px] rounded-xl overflow-hidden group cursor-pointer"
                variants={item}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.4), 0 0 15px rgba(212, 175, 55, 0.3)"
                }}
              >
                <Image
                  src="/images/optimized_IMG_1079.jpg"
                  alt="Luxury Suites"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  quality={75}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/90 via-[#4b0082]/60 to-transparent flex flex-col justify-end p-6">
                  <MdOutline360 className="text-4xl text-[#d4af37] mb-2" />
                  <h5 className="text-2xl font-bold text-white mb-1">Luxury Suites</h5>
                  <p className="text-gray-300 mb-4">Elegant accommodations for guests with premium amenities and comfort</p>
                  <motion.button 
                    className="px-4 py-2 rounded-full bg-[#d4af37] text-[#0a0a1a] font-semibold inline-flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <BiMap />
                    <span>Explore Now</span>
                  </motion.button>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative h-[400px] rounded-xl overflow-hidden group cursor-pointer"
                variants={item}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.4), 0 0 15px rgba(212, 175, 55, 0.3)"
                }}
              >
                <Image
                  src="/images/optimized_IMG_1057.jpg"
                  alt="Hall"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  quality={75}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/90 via-[#4b0082]/60 to-transparent flex flex-col justify-end p-6">
                  <MdOutline360 className="text-4xl text-[#d4af37] mb-2" />
                  <h5 className="text-2xl font-bold text-white mb-1">Celebration Hall</h5>
                  <p className="text-gray-300 mb-4">Perfect for medium-sized gatherings with beautiful decorative elements</p>
                  <motion.button 
                    className="px-4 py-2 rounded-full bg-[#d4af37] text-[#0a0a1a] font-semibold inline-flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <BiMap />
                    <span>Explore Now</span>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Event Inspiration */}
          <div>
            <motion.h4 
              className="text-[#d4af37] text-xl font-medium mb-8 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Event Inspiration
            </motion.h4>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {[
                { 
                  icon: <GiPartyPopper className="text-3xl" />, 
                  title: "Wedding Reception", 
                  desc: "Create unforgettable memories in our elegant ballroom."
                },
                { 
                  icon: <FaCalendarAlt className="text-3xl" />, 
                  title: "Corporate Events", 
                  desc: "Professional settings for meetings and conferences."
                },
                { 
                  icon: <FaGlassCheers className="text-3xl" />, 
                  title: "Gala Dinners", 
                  desc: "Luxurious dining experiences for special occasions."
                },
                { 
                  icon: <GiCrystalBall className="text-3xl" />, 
                  title: "Cultural Events", 
                  desc: "Spaces designed to celebrate diverse traditions."
                }
              ].map((eventItem, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gradient-to-br from-[#1a1a3a] to-[#2a2a4a] rounded-lg p-6 border border-[#d4af37]/20 text-center hover:border-[#d4af37]/50 transition-all"
                  variants={item}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.4), 0 0 15px rgba(212, 175, 55, 0.3)"
                  }}
                >
                  <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 flex items-center justify-center mx-auto mb-4 text-[#d4af37]">
                    {eventItem.icon}
                  </div>
                  <h5 className="text-xl font-bold mb-2 text-white">{eventItem.title}</h5>
                  <p className="text-gray-300 mb-4">{eventItem.desc}</p>
                  <motion.button 
                    className="text-[#d4af37] inline-flex items-center gap-1 hover:gap-3 transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span>See Examples</span>
                    <FaArrowRight />
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#4b0082] to-[#8a2be2] text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          {[...Array(30)].map((_, i) => (
            <motion.div 
              key={i}
              className="absolute rounded-full"
              animate={{ 
                y: [Math.random() * 100, Math.random() * -100],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{ 
                duration: 5 + Math.random() * 10, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                background: '#d4af37',
                boxShadow: '0 0 10px #d4af37'
              }}
            />
          ))}
        </div>
        <div className="container-custom relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-secondary mb-4" style={{ 
              background: "linear-gradient(to right, #ffffff, #d4af37)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 15px rgba(212, 175, 55, 0.3)"
            }}>Want to Host Your Event at Vasudev Convention?</h2>
            <p className="max-w-3xl mx-auto mb-8 text-white/90">
              Contact us today to book your event and create your own beautiful memories at Vasudev Convention.
            </p>
            <Link href="/contact" prefetch={true}>
              <motion.button 
                className="px-8 py-4 rounded-full bg-[#d4af37] text-[#4b0082] font-bold text-lg shadow-lg shadow-[#d4af37]/30 relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(212, 175, 55, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Contact Us Now</span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-[#f5e7a3] to-[#d4af37] opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="relative max-w-4xl w-full h-[80vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                sizes="100vw"
                className="object-contain"
                quality={90}
                priority
              />
              <motion.button
                className="absolute top-4 right-4 bg-[#d4af37] text-[#0a0a1a] p-3 rounded-full border border-white/30"
                onClick={() => setSelectedImage(null)}
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: "0 0 15px rgba(212, 175, 55, 0.7)" 
                }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes />
              </motion.button>
              
              <motion.button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#d4af37] text-[#0a0a1a] p-3 rounded-full border border-white/30"
                onClick={handlePrev}
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: "0 0 15px rgba(212, 175, 55, 0.7)" 
                }}
                whileTap={{ scale: 0.9 }}
              >
                <FaArrowLeft />
              </motion.button>
              
              <motion.button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#d4af37] text-[#0a0a1a] p-3 rounded-full border border-white/30"
                onClick={handleNext}
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: "0 0 15px rgba(212, 175, 55, 0.7)" 
                }}
                whileTap={{ scale: 0.9 }}
              >
                <FaArrowRight />
              </motion.button>
              
              <motion.div 
                className="absolute bottom-4 left-0 right-0 text-center bg-[#0a0a1a]/70 backdrop-blur-sm py-4 px-6 rounded-lg mx-4 border border-[#d4af37]/30"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="text-[#d4af37] text-xl font-bold">{selectedImage.title}</h4>
                <p className="text-white">{selectedImage.category}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
} 