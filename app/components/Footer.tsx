'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import icons
const FaPhone = dynamic(() => import('react-icons/fa').then(mod => mod.FaPhone), { ssr: false });
const FaEnvelope = dynamic(() => import('react-icons/fa').then(mod => mod.FaEnvelope), { ssr: false });
const FaMapMarkerAlt = dynamic(() => import('react-icons/fa').then(mod => mod.FaMapMarkerAlt), { ssr: false });
const FaFacebook = dynamic(() => import('react-icons/fa').then(mod => mod.FaFacebook), { ssr: false });
const FaInstagram = dynamic(() => import('react-icons/fa').then(mod => mod.FaInstagram), { ssr: false });
const FaTwitter = dynamic(() => import('react-icons/fa').then(mod => mod.FaTwitter), { ssr: false });
const FaYoutube = dynamic(() => import('react-icons/fa').then(mod => mod.FaYoutube), { ssr: false });

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400 mb-4">
              Vasudev Convention is your premier destination for elegant events and memorable celebrations.
              We provide exceptional service and unforgettable experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors" prefetch={true}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors" prefetch={true}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors" prefetch={true}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-white transition-colors" prefetch={true}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors" prefetch={true}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#weddings" className="text-gray-400 hover:text-white transition-colors" prefetch={true}>
                  Weddings
                </Link>
              </li>
              <li>
                <Link href="/services#corporate" className="text-gray-400 hover:text-white transition-colors" prefetch={true}>
                  Corporate Events
                </Link>
              </li>
              <li>
                <Link href="/services#parties" className="text-gray-400 hover:text-white transition-colors" prefetch={true}>
                  Parties
                </Link>
              </li>
              <li>
                <Link href="/services#catering" className="text-gray-400 hover:text-white transition-colors" prefetch={true}>
                  Catering
                </Link>
              </li>
              <Link href="/services#catering" className="text-gray-400 hover:text-white transition-colors" prefetch={true}>
                  Haldi ceremonies
                </Link>
                <li>
                <Link href="/services#catering" className="text-gray-400 hover:text-white transition-colors" prefetch={true}>
                  Mehendi ceremonies
                  
                </Link>
                </li>
                 <li>
                <Link href="/services#catering" className="text-gray-400 hover:text-white transition-colors" prefetch={true}>
                  Engagement 
                </Link>
                </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <FaPhone className="text-purple-500" />
                <a href="tel:+919861171001" className="hover:text-white transition-colors">
                  +91 98611 71001
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaEnvelope className="text-purple-500" />
                <a href="mailto:by-vasudevconvention25@gmail.com" className="hover:text-white transition-colors">
                  vasudevconvention25@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-purple-500" />
                <span>
                plot no 120/2457, Lingipur chowk , Infront of Janani hospital, Bhubaneswar, Odisha 751002
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vasudev Convention. All rights reserved.</p>
          <p className="mt-2">
            Powered by{' '}
            <a 
              href="https://www.sandrcodeworks.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              S & R Codeworks
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 