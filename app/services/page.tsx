'use client';

import { motion } from 'framer-motion';
import { FaUsers, FaCalendarAlt, FaUtensils, FaMusic, FaCamera, FaWifi, FaParking, FaAccessibleIcon, FaClipboardList } from 'react-icons/fa';
import Image from 'next/image';
import Navbar from '../components/Navbar';

const services = [
  {
    title: "Wedding Celebrations",
    description: "Make your special day unforgettable with our elegant wedding venues and comprehensive wedding planning services.",
    icon: <FaUsers className="text-4xl" />,
    image: "/images/IMG_1052.jpg",
    features: ["Customizable wedding packages", "Professional event planning", "Elegant venues", "Catering services"]
  },
  {
    title: "Corporate Events",
    description: "Host successful business meetings, conferences, and corporate events in our state-of-the-art facilities.",
    icon: <FaCalendarAlt className="text-4xl" />,
    image: "/images/IMG_1036.jpg",
    features: ["Modern conference rooms", "Audio-visual equipment", "Business center", "Team building activities"]
  },
  {
    title: "Catering Services",
    description: "Delight your guests with our premium catering services offering diverse cuisines and impeccable service.",
    icon: <FaUtensils className="text-4xl" />,
    image: "/images/IMG_1017.jpg",
    features: ["Multi-cuisine options", "Custom menu planning", "Professional staff", "Quality ingredients"]
  },
  {
    title: "Entertainment",
    description: "Enhance your events with our professional entertainment services and state-of-the-art sound systems.",
    icon: <FaMusic className="text-4xl" />,
    image: "/images/audio.png",
    features: ["Live music arrangements", "DJ services", "Sound systems", "Lighting effects"]
  },
  {
    title: "Photography & Videography",
    description: "Capture every moment of your special event with our professional photography and videography services.",
    icon: <FaCamera className="text-4xl" />,
    image: "/images/camera.png",
    features: ["Professional photographers", "Video coverage", "Photo albums", "Digital delivery"]
  },
  {
    title: "Event Planning",
    description: "Comprehensive event planning services from concept to execution, ensuring every detail is perfect.",
    icon: <FaClipboardList className="text-4xl" />,
    image: "/images/IMG_1029.jpg",
    features: ["Custom event design", "Timeline management", "Vendor coordination", "Budget planning"]
  }
];

const amenities = [
  { icon: <FaWifi className="text-2xl" />, title: "High-Speed WiFi" },
  { icon: <FaParking className="text-2xl" />, title: "Ample Parking" },
  { icon: <FaAccessibleIcon className="text-2xl" />, title: "Accessibility" }
];

function ServicesPage() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/IMG_1036.jpg"
              alt="Our Services"
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
              Our Services
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Comprehensive Event Solutions for Every Occasion
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

        {/* Services Grid */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center text-white mb-2">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
                Additional Amenities
              </motion.h2>
              <motion.p 
                className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                We provide a range of additional amenities to ensure your event runs smoothly and your guests are comfortable.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {amenities.map((amenity, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-r from-yellow-400/10 via-pink-500/10 to-purple-500/10 dark:from-yellow-400/5 dark:via-pink-500/5 dark:to-purple-500/5 rounded-2xl p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center text-white mb-4">
                    {amenity.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{amenity.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container-custom">
            <motion.div 
              className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 rounded-3xl p-12 text-center text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Plan Your Event?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let us help you create an unforgettable experience. Contact us today to discuss your event requirements.
              </p>
              <motion.button
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us Now
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ServicesPage; 