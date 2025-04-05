'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaUsers, FaCalendarAlt, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWifi, FaParking, FaAccessibleIcon, FaUtensils, FaMusic, FaCamera, FaArrowRight, FaCheck, FaTimes, FaRuler, FaBuilding, FaBed, FaUtensilSpoon, FaGlassCheers, FaVideo, FaMicrophone, FaChair, FaTable, FaCouch, FaDoorOpen, FaShieldAlt, FaUserTie, FaHandshake } from 'react-icons/fa';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import { useState } from 'react';

const venues = [
  {
    title: "Grand Ballroom",
    description: "Our largest venue, perfect for grand celebrations and large corporate events. Features a stunning crystal chandelier and panoramic city views.",
    capacity: "500+ guests",
    image: "/images/IMG_1058.jpg",
    features: [
      "Spacious 3000 sq ft area",
      "High ceilings with chandeliers",
      "Built-in stage and sound system",
      "Separate entrance and parking",
      "Dedicated bridal suite",
      "Professional lighting system",
      "Multiple breakout areas",
      "Customizable floor plan"
    ],
    
    highlights: ["Perfect for weddings", "Corporate events", "Grand celebrations"],
    dimensions: "80' x 60'",
    ceilingHeight: "20'",
   
    included: [
      "Basic sound system",
      "Standard lighting",
      "Tables and chairs",
      "Setup and cleanup",
      "Event coordinator"
    ]
  },
  {
    title: "Conference Hall",
    description: "Modern conference facility equipped with state-of-the-art technology. Perfect for business meetings, seminars, and workshops.",
    capacity: "400 guests",
    image: "/images/IMG_1036.jpg",
    features: [
      "Professional audio-visual setup",
      "High-speed WiFi",
      "Ergonomic seating",
      "Natural lighting",
      "Interactive whiteboards",
      "Video conferencing",
      "Breakout rooms",
      "Business center access"
    ],
    
    highlights: [ "Engagement ", "Wedding ","Business meetings", "Seminars", "Workshops"],
    dimensions: "40' x 30'",
    ceilingHeight: "12'",
    
    included: [
      "Projector and screen",
      "Microphone system",
      "Conference tables",
      "High-speed internet",
      "Technical support"
    ]
  },
  {
    title: "Luxurious Rooms",
    description: "An opulent and elegantly designed space, perfect for intimate high-end gatherings. Featuring sophisticated interiors, plush seating, and exclusive amenities, Luxuria Room offers a refined atmosphere for elite experiences.",
    image: "/images/IMG_1079.jpg",
    features: [
      "Exquisite designer interiors",
      "Premium upholstered seating",
      "Custom ambient lighting",
      "Personalized concierge service",
      "High-end sound and AV system",
      "Smart climate control",
      "Luxury dining setup",
      "Exclusive bar and catering space",
      "Elegant chandeliers and decor",
      "Acoustic insulation for noise control"
    ],
    
    highlights: ["Spacious Room, luxury rooms "],
    dimensions: "60' x 40'",
    ceilingHeight: "15'",
    
    included: [
      "Designer furniture with plush seating",
      "Custom ambient lighting control",
      "catering area",
      "Concierge and butler service",
      "Exclusive access to the lounge"
    ]
  },
  
    {
      "title": "Elevate",
      "description": "Elevate is an exclusive, high-end venue designed for luxury experiences. With premium amenities, sophisticated ambiance, and personalized services, it offers an unmatched setting for elite gatherings.",
      "image": "/images/elevate.png",
        "features": [
          "Premium designer furnishings",
          "Private entrance with VIP access",
          "Dedicated valet parking",
          "Exclusive gourmet catering area",
          "Luxury private bar setup",
          "Custom ambient and mood lighting",
          "VIP lounge with personalized concierge",
          "On-demand butler service",
          "High-tech sound and AV system",
          "Smart climate control for perfect comfort",
          "Elegant and customizable decor themes",
          "Acoustically optimized interiors for immersive experiences"
        ],
      
      
      
      "highlights": [ "Weddings","Corporate events", "Grand celebrations", "Exclusive gatherings"],
      
      "ceilingHeight": "12'",
      
      "included": [
        "Premium furniture",
        "Custom lighting",
        "Private bar setup",
        "Butler service",
        "Exclusive access"
      ]
    }
    
];

const amenities = [
  { icon: <FaWifi className="text-2xl" />, title: "High-Speed WiFi", description: "Fast and reliable internet connection" },
  { icon: <FaParking className="text-2xl" />, title: "Ample Parking", description: "Secure parking for all guests" },
  { icon: <FaAccessibleIcon className="text-2xl" />, title: "Accessibility", description: "Wheelchair accessible facilities" },
  { icon: <FaUtensils className="text-2xl" />, title: "Catering Services", description: "Premium catering options" },
  { icon: <FaMusic className="text-2xl" />, title: "Sound System", description: "Professional audio equipment" },
  { icon: <FaCamera className="text-2xl" />, title: "Photography", description: "Professional photography services" }
];

const galleryImages = [
  { src: "/images/IMG_1058.jpg", alt: "Grand Ballroom Interior" },
  { src: "/images/IMG_1059.jpg", alt: "Conference Hall Setup" },
  { src: "/images/IMG_1032.jpg", alt: "Hall" },
  { src: "/images/IMG_1086.jpg", alt: "Royal Suite Entrance" },
  { src: "/images/IMG_1052.jpg", alt: "Event Setup" },
  { src: "/images/IMG_1022.jpg", alt: "Catering Service" }
];

const services = [
  {
    title: "Event Planning",
    description: "Professional event planning services to ensure your event runs smoothly",
    icon: <FaCalendarAlt className="text-3xl" />
  },
  {
    title: "Catering",
    description: "Customizable catering options with premium quality food and service",
    icon: <FaUtensilSpoon className="text-3xl" />
  },
  {
    title: "Entertainment",
    description: "Professional entertainment services including music and performances",
    icon: <FaMusic className="text-3xl" />
  },
  {
    title: "Technical Support",
    description: "Complete technical support for audio, video, and lighting",
    icon: <FaVideo className="text-3xl" />
  }
];

function VenuePage() {
  const [selectedVenue, setSelectedVenue] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/IMG_1036.jpg"
              alt="Our Venues"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          </div>
          
          <motion.div 
            className="relative z-10 text-center text-white px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Venues
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Elegant Spaces for Unforgettable Events
            </motion.p>
            <motion.button
              className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Explore Venues <FaArrowRight />
            </motion.button>
          </motion.div>

          {/* Animated background elements */}
          <motion.div 
            className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-purple-300/30 via-pink-300/30 to-rose-300/30 dark:from-purple-900/30 dark:via-pink-900/30 dark:to-rose-900/30 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </section>

        {/* Venues Grid */}
        <section className="py-12">
          <div className="container-custom">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">
                Our Premium Venues
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Choose from our selection of elegant venues, each designed to create the perfect atmosphere for your special event.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {venues.map((venue, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="relative h-64">
                    <Image
                      src={venue.image}
                      alt={venue.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-2xl font-bold text-white mb-2">{venue.title}</h3>
                      <div className="flex items-center gap-4 text-white/90 mb-2">
                        <span className="flex items-center gap-2">
                          <FaUsers /> {venue.capacity}
                        </span>
                        
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {venue.highlights.map((highlight, idx) => (
                          <span key={idx} className="bg-white/10 text-white px-2 py-1 rounded-full text-xs">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{venue.description}</p>
                    <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <FaMapMarkerAlt className="text-purple-500" />
                        <span>{venue.dimensions}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <FaUsers className="text-purple-500" />
                        
                      </div>
                    </div>
                    <div className="space-y-1 mb-4">
                      {venue.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                          <FaCheck className="text-green-500 text-xs" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <motion.button
                        className="flex-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-white py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Book Now
                      </motion.button>
                      <motion.button
                        className="flex-1 bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-400 py-2 rounded-full text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedVenue(selectedVenue === index ? null : index)}
                      >
                        View Details
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 bg-white dark:bg-gray-800">
          <div className="container-custom">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">
                Additional Services
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Enhance your event with our comprehensive range of services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-r from-yellow-400/10 via-pink-500/10 to-purple-500/10 dark:from-yellow-400/5 dark:via-pink-500/5 dark:to-purple-500/5 rounded-xl p-6 text-center group hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-12">
          <div className="container-custom">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">
                Venue Gallery
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Take a virtual tour of our stunning venues
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative h-64 rounded-xl overflow-hidden cursor-pointer group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container-custom">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Premium Amenities
              </motion.h2>
              <motion.p 
                className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Experience luxury and convenience with our comprehensive range of amenities.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {amenities.map((amenity, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-r from-yellow-400/10 via-pink-500/10 to-purple-500/10 dark:from-yellow-400/5 dark:via-pink-500/5 dark:to-purple-500/5 rounded-2xl p-6 text-center group hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {amenity.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{amenity.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{amenity.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container-custom">
            <motion.div 
              className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 rounded-3xl p-12 text-center text-white relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-6">Ready to Book Your Venue?</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                  Contact us today to check availability and schedule a venue tour.
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                  <motion.button
                    className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Schedule Tour <FaArrowRight />
                  </motion.button>
                  <motion.button
                    className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Us <FaPhone />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Venue Details Modal */}
        <AnimatePresence>
          {selectedVenue !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedVenue(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
                onClick={e => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  onClick={() => setSelectedVenue(null)}
                >
                  <FaTimes className="text-2xl" />
                </button>
                
                {selectedVenue !== null && (
                  <div className="p-6">
                    <div className="relative h-64 mb-6 rounded-xl overflow-hidden">
                      <Image
                        src={venues[selectedVenue].image}
                        alt={venues[selectedVenue].title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <h2 className="text-3xl font-bold mb-4">{venues[selectedVenue].title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{venues[selectedVenue].description}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <FaRuler className="text-purple-500" />
                        <span>{venues[selectedVenue].dimensions}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <FaBuilding className="text-purple-500" />
                        <span>Ceiling: {venues[selectedVenue].ceilingHeight}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <FaUsers className="text-purple-500" />
                        <span>{venues[selectedVenue].capacity}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <FaParking className="text-purple-500" />
                      
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-3">Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {venues[selectedVenue].features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                            <FaCheck className="text-green-500" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-3">Included Amenities</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {venues[selectedVenue].included.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                            <FaCheck className="text-green-500" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <motion.button
                        className="flex-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-white py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Book Now
                      </motion.button>
                      <motion.button
                        className="flex-1 bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-400 py-3 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Schedule Tour
                      </motion.button>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-5xl w-full"
                onClick={e => e.stopPropagation()}
              >
                <button
                  className="absolute -top-12 right-0 text-white hover:text-gray-300"
                  onClick={() => setSelectedImage(null)}
                >
                  <FaTimes className="text-3xl" />
                </button>
                {selectedImage !== null && (
                  <div className="relative h-[80vh] rounded-xl overflow-hidden">
                    <Image
                      src={galleryImages[selectedImage].src}
                      alt={galleryImages[selectedImage].alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

export default VenuePage; 