'use client';

import { motion } from 'framer-motion';
import { FaWifi, FaParking, FaAccessibleIcon, FaUtensils, FaMusic, FaCamera, FaGlassCheers, FaVideo, FaMicrophone, FaChair, FaTable, FaCouch, FaDoorOpen, FaShieldAlt, FaUserTie, FaHandshake, FaCoffee, FaBook, FaDesktop, FaProjectDiagram, FaUsers, FaClipboardList, FaBell } from 'react-icons/fa';
import Image from 'next/image';

const facilities = [
  {
    icon: <FaUsers className="text-4xl" />,
    title: "Conference Rooms",
    description: "Modern meeting spaces equipped with professional amenities for productive discussions.",
    color: "from-blue-500 to-cyan-500",
    features: ["Ergonomic Seating", "Interactive Whiteboards", "High-Speed WiFi"]
  },
  {
    icon: <FaUtensils className="text-4xl" />,
    title: "Catering Services",
    description: "Premium dining experiences with customizable menus for all occasions.",
    color: "from-purple-500 to-pink-500",
    features: ["Custom Menu Planning", "Professional Chefs", "Special Dietary Options"]
  },
  {
    icon: <FaVideo className="text-4xl" />,
    title: "Audio-Visual Equipment",
    description: "State-of-the-art presentation and sound systems for impactful events.",
    color: "from-orange-500 to-red-500",
    features: ["Projectors", "Sound Systems", "Microphone Setup"]
  },
  {
    icon: <FaDesktop className="text-4xl" />,
    title: "Business Center",
    description: "Fully equipped workspace with essential business amenities.",
    color: "from-green-500 to-emerald-500",
    features: ["Printing Services", "High-Speed Internet", "Workstations"]
  },
  {
    icon: <FaClipboardList className="text-4xl" />,
    title: "Event Planning",
    description: "Professional event coordination services for seamless execution.",
    color: "from-yellow-500 to-amber-500",
    features: ["Custom Planning", "Timeline Management", "Vendor Coordination"]
  },
  {
    icon: <FaBell className="text-4xl" />,
    title: "Concierge Services",
    description: "Dedicated support team to assist with all your event needs.",
    color: "from-indigo-500 to-purple-500",
    features: ["24/7 Support", "Guest Assistance", "Special Requests"]
  }
];

export default function Facilities() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Facilities
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover our comprehensive range of facilities designed to make your event successful
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${facility.color} flex items-center justify-center text-white mb-4`}>
                {facility.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">{facility.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">{facility.description}</p>
              <ul className="space-y-2">
                {facility.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 