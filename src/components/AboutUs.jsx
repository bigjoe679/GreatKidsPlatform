import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div className="w-screen overflow-x-hidden">
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-psd/money-blank-banner-sales-background_23-2151114595.jpg?semt=ais_hybrid&w=740')",
        }}
      >
        <div className="absolute inset-0 bg-opacity-60"></div>

        <div className="relative z-10 text-white text-center px-6 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-500">
            About <span className="text-blue-400">GreatKidsPlatform</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-blue-300">
            At GreatKidsPlatform, we’re passionate about empowering the next generation
            through innovative digital learning and creative experiences. Our mission is
            to inspire, educate, and support children in their growth journey through
            technology.
          </p>
        </div>
      </div>

      {/* Informational Section with Animation */}
      <motion.section
        className="flex flex-col md:flex-row items-center justify-between p-10 bg-white w-full"
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Text Content */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <div className="text-center max-w-4xl mx-auto py-16 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
              Inspiring Young Minds
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed italic">
              "We believe in the limitless potential of every child. Through creativity, education, and support, we can shape a future where children not only dream big, but have the tools and confidence to achieve those dreams."
              <br />
              <span className="block mt-4 font-semibold text-blue-500">— GreatKidsPlatform Team</span>
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://media.istockphoto.com/id/171247834/photo/confident-african-american-female-executive-isolated.jpg?s=612x612&w=0&k=20&c=ET3tSiFZk-M-K5YLrxLOHNbQcBDYyBl0BFTwm1eameY="
            alt="Kids learning"
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;
