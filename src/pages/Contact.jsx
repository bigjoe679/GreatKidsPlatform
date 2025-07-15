import React, { useState } from 'react';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col w-full overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full px-4 sm:px-8 md:px-12 lg:px-0 max-w-3xl mx-auto mt-12 bg-white rounded-lg shadow-lg"
      >
        <div className="p-8">
          <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">Contact Us</h1>
          <p className="mb-8 text-center text-gray-700">
            Have questions or want to get involved? Send us a message or email us directly at:
            <a href="mailto:josephonoja457@gmail.com" className="text-blue-600 underline ml-1">
              josephonoja457@gmail.com
            </a>
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-1 font-semibold text-gray-800">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-semibold text-gray-800">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-semibold text-gray-800">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Contact;
