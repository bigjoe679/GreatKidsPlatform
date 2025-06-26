import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const services = [
  {
    title: 'Scholarship Program',
    description: 'We provide access to educational scholarships for outstanding kids from underprivileged backgrounds.',
    icon: '🎓',
  },
  {
    title: 'Charity Outreach',
    description: 'Our charity programs support children in need with learning tools, food, and clothes.',
    icon: '❤️',
  },
  {
    title: 'Kids Voting Platform',
    description: 'We encourage young voices through a fun, secure voting platform to make decisions that affect them.',
    icon: '🗳️',
  },
  {
    title: 'Creative Workshops',
    description: 'Art, coding, music, and dance workshops that help unlock creativity in young minds.',
    icon: '🎨',
  },
  {
    title: 'Mentorship Sessions',
    description: 'Kids are paired with experienced mentors who guide them in education and career aspirations.',
    icon: '👨‍🏫',
  },
  {
    title: 'Interactive e-Learning',
    description: 'We offer interactive, gamified learning modules in STEM, arts, and languages.',
    icon: '💡',
  },
];

const Services = () => {
  return (
    <div className="w-screen overflow-x-hidden bg-blue-50">
      {/* Intro Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <motion.h1
          className="text-4xl font-bold text-blue-700 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Empowering the Future of Our Children
        </motion.h1>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Our mission is to create safe, nurturing spaces where every child can learn, grow, and thrive. Explore the range of services we offer to make this possible.
        </motion.p>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4 bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center text-blue-600">
                {service.icon}
              </div>
              <h2 className="text-xl font-semibold text-blue-600 mb-2">{service.title}</h2>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call-to-Action */}
      <motion.div
        className="bg-blue-600 text-white text-center py-12 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-3">Want to Support or Learn More?</h2>
        <p className="mb-6 text-lg">Join us in shaping bright futures for our children today.</p>
        <a
          href="/contact"
          className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-full shadow hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;
