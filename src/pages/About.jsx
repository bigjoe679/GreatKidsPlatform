import React from 'react';
import AboutUs from '../components/AboutUs';
import VisionMissionSection from '../components/VisionMissionSection';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';


const About = () => {
  return (
    <div>
      <AboutUs />
      <VisionMissionSection />
        <Testimonial />
        <Footer />
    </div>
  );
};

export default About;

