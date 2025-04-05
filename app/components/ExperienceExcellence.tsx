'use client';

import { motion } from 'framer-motion';
import { FaUsers, FaCalendarAlt, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWifi, FaParking, FaAccessibleIcon, FaUtensils, FaMusic, FaCamera, FaGlassCheers, FaVideo, FaMicrophone, FaChair, FaTable, FaCouch, FaDoorOpen, FaShieldAlt, FaUserTie, FaHandshake, FaStar, FaCheckCircle, FaHeart, FaMedal } from 'react-icons/fa';
import Image from 'next/image';

const features = [
  {
    icon: <FaUsers className="text-4xl" />,
    title: "Expert Event Team",
    description: "Our experienced event coordinators ensure flawless execution of your special occasions.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <FaGlassCheers className="text-4xl" />,
    title: "Premium Catering",
    description: "Exquisite culinary experiences with customizable menus for every occasion.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <FaVideo className="text-4xl" />,
    title: "State-of-the-Art Technology",
    description: "Modern audio-visual equipment and high-speed connectivity for seamless events.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: <FaMedal className="text-4xl" />,
    title: "Award-Winning Service",
    description: "Recognized for excellence in hospitality and event management.",
    color: "from-green-500 to-emerald-500"
  }
];

const stats = [
  { number: "10+", label: "Events Hosted", icon: <FaCalendarAlt className="text-3xl" /> },
  { number: "500+", label: "Happy Clients", icon: <FaHeart className="text-3xl" /> },
  { number: "98%", label: "Client Satisfaction", icon: <FaStar className="text-3xl" /> },
  { number: "24/7", label: "Support Available", icon: <FaClock className="text-3xl" /> }
];

const testimonials = [
  {
    name: "John Doe",
    role: "Wedding Client",
    text: "The venue was absolutely perfect for our wedding. The staff was incredibly helpful and made our special day even more memorable.",
    rating: 5,
    image: "/images/optimized_IMG_1012.jpg"
  },
  {
    name: "Jane Smith",
    role: "Corporate Event Organizer",
    text: "We hosted our annual conference here and everything was flawless. The facilities are top-notch and the service is exceptional.",
    rating: 5,
    image: "/images/optimized_IMG_1013.jpg"
  },
  {
    name: "Mike Johnson",
    role: "Birthday Party Host",
    text: "Celebrated my daughter's birthday here and it was amazing! The space was perfect and the staff went above and beyond to make it special.",
    rating: 5,
    image: "/images/optimized_IMG_1017.jpg"
  }
];

export default function ExperienceExcellence() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        {/* Main Features */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience excellence in every aspect of your event with our comprehensive services and dedicated team.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Client Testimonials
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{testimonial.text}</p>
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 