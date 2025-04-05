'use client';

import { useState, useEffect, useCallback, useMemo, memo, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

// Lazy load the map component
const MapComponent = lazy(() => import('./MapComponent'));

// Memoized contact info to prevent recreating on each render
const CONTACT_INFO = {
  address: "plot no 120/2457, Lingipur chowk, Infront of Janani hospital, Bhubaneswar, Odisha 751002",
  phone: "+91 9861171001",
  email: "by-vasudevconvention25@gmail.com",
  timing: "Open 24/7"
};

// Memoized form fields to prevent recreating on each render
const FORM_FIELDS = [
  { id: 'name', label: 'Your Name *', type: 'text', required: true },
  { id: 'email', label: 'Email Address *', type: 'email', required: true },
  { id: 'phone', label: 'Phone Number *', type: 'tel', required: true },
  { id: 'eventType', label: 'Event Type', type: 'select', required: false },
  { id: 'date', label: 'Event Date', type: 'date', required: false },
  { id: 'message', label: 'Your Message *', type: 'textarea', required: true }
];

// Memoized event types
const EVENT_TYPES = [
  'Wedding',
  'Corporate Event',
  'Birthday Party',
  'Private Party',
  'Thread Ceremony',
  'Kitty Party',
  'Other'
];

// Memoized ContactInfoItem component
const ContactInfoItem = memo(({ icon: Icon, title, content }: { icon: any; title: string; content: string }) => (
  <div className="flex items-start space-x-4">
    <div className="bg-[#d4af37] p-3 rounded-full text-white">
      <Icon size={20} />
    </div>
    <div>
      <h5 className="font-bold mb-1">{title}</h5>
      <p className="text-gray-300">{content}</p>
    </div>
  </div>
));

ContactInfoItem.displayName = 'ContactInfoItem';

// Memoized FormField component
const FormField = memo(({ field, value, onChange }: { field: any; value: string; onChange: (e: any) => void }) => {
  if (field.type === 'textarea') {
    return (
      <div className="mb-4">
        <label htmlFor={field.id} className="block text-gray-700 mb-2">
          {field.label}
        </label>
        <textarea
          id={field.id}
          name={field.id}
          value={value}
          onChange={onChange}
          required={field.required}
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
        />
      </div>
    );
  }

  if (field.type === 'select') {
    return (
      <div>
        <label htmlFor={field.id} className="block text-gray-700 mb-2">
          {field.label}
        </label>
        <select
          id={field.id}
          name={field.id}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
        >
          <option value="">Select Event Type</option>
          {EVENT_TYPES.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div>
      <label htmlFor={field.id} className="block text-gray-700 mb-2">
        {field.label}
      </label>
      <input
        type={field.type}
        id={field.id}
        name={field.id}
        value={value}
        onChange={onChange}
        required={field.required}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
      />
    </div>
  );
});

FormField.displayName = 'FormField';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Memoized handlers
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        date: '',
        message: '',
      });
      
      setTimeout(() => setSubmitSuccess(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  // Memoized contact items
  const contactItems = useMemo(() => [
    { icon: FaMapMarkerAlt, title: 'Our Location', content: CONTACT_INFO.address },
    { icon: FaPhone, title: 'Phone Number', content: CONTACT_INFO.phone },
    { icon: FaEnvelope, title: 'Email Address', content: CONTACT_INFO.email },
    { icon: FaClock, title: 'Office Hours', content: CONTACT_INFO.timing }
  ], []);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Enable audio after user interaction
  useEffect(() => {
    const handleInteraction = () => {
      setHasInteracted(true);
      // Remove event listeners after first interaction
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="section-padding bg-[#f8f0e3] relative min-h-[90vh]" id="contact">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-secondary text-[#8b0000] mb-2">Contact Us</h2>
            <h3 className="heading-tertiary mb-6 text-[#470062]">Get in Touch for Bookings & Inquiries</h3>
            <p className="max-w-3xl mx-auto text-gray-700">
              Reach out to us for booking inquiries, venue tours, or any questions about our services.
              Our team is ready to help you plan your perfect event at Vasudev Convention.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg"
          >
            <h4 className="text-2xl font-bold mb-6 text-[#470062]">Send us a Message</h4>
            
            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6"
                >
                  Thank you for your message! We will get back to you soon.
                </motion.div>
              )}
            </AnimatePresence>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {FORM_FIELDS.slice(0, 2).map(field => (
                  <FormField
                    key={field.id}
                    field={field}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={handleChange}
                  />
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {FORM_FIELDS.slice(2, 4).map(field => (
                  <FormField
                    key={field.id}
                    field={field}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={handleChange}
                  />
                ))}
              </div>
              
              {FORM_FIELDS.slice(4).map(field => (
                <FormField
                  key={field.id}
                  field={field}
                  value={formData[field.id as keyof typeof formData]}
                  onChange={handleChange}
                />
              ))}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#0a0a0a]/90 backdrop-blur-sm text-white p-8 rounded-lg shadow-lg mb-8">
              <h4 className="text-2xl font-bold mb-6 text-[#d4af37]">Contact Information</h4>
              
              <div className="space-y-6">
                {contactItems.map((item, index) => (
                  <ContactInfoItem
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    content={item.content}
                  />
                ))}
              </div>
            </div>
            
            {/* Map with lazy loading */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden h-80">
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <div className="animate-pulse text-gray-400">Loading map...</div>
                </div>
              }>
                <MapComponent />
              </Suspense>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact); 