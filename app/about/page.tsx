'use client';

import { motion } from 'framer-motion';
import { FaUsers, FaCalendarAlt, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import Image from 'next/image';
import Navbar from '../components/Navbar';

const AboutPage = () => {
  const stats = [
    { number: "", label: "Newly launched convention, built for impact. ", icon: <FaCalendarAlt className="text-4xl" /> },
    { number: "10+", label: "Events Hosted", icon: <FaUsers className="text-4xl" /> },
    { number: "500+", label: "Happy Clients", icon: <FaUsers className="text-4xl" /> },
    { number: "24/7", label: "Support", icon: <FaClock className="text-4xl" /> }
  ];

  const features = [
    {
      title: "Premium Venues",
      description: "State-of-the-art facilities with modern amenities and elegant interiors.",
      icon: "🏛️"
    },
    {
      title: "Expert Team",
      description: "Professional event planners and staff dedicated to your success.",
      icon: "👥"
    },
    {
      title: "Custom Solutions",
      description: "Tailored packages to meet your specific event requirements.",
      icon: "✨"
    },
    {
      title: "Quality Service",
      description: "Uncompromising commitment to excellence in every detail.",
      icon: "⭐"
    }
  ];

  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/IMG_1036.jpg"
              alt="Basudev Convention"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
          </div>
          
          <motion.div 
            className="relative z-10 text-center text-white px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About Basudev Convention
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your Premier Destination for Unforgettable Events
            </motion.p>
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

        {/* Stats Section */}
        <section className="py-20 relative">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center text-white mb-4">
                      {stat.icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
                      {stat.number}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">
                  Our Story
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Founded in 2025, Basudev Convention has been at the forefront of event management excellence. 
                  What started as a small venue has grown into a premier destination for all types of events, 
                  from intimate gatherings to grand celebrations.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Our commitment to quality, attention to detail, and customer satisfaction has made us the 
                  preferred choice for event organizers across the region. We believe in creating memorable 
                  experiences that exceed expectations.
                </p>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-3xl">{feature.icon}</span>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                className="relative h-[500px] rounded-2xl overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/IMG_1090.jpg"
                  alt="Our Story"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center text-white">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">plot no 120/2457, Lingipur chowk , Infront of Janani hospital, Bhubaneswar, Odisha 751002</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center text-white">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">+91 9861171001</p>
                    <p className="text-gray-600 dark:text-gray-300">+91 7735014971</p>

                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center text-white">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">vasudevconvention25@gmail.com</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage; 