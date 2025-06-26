import React, { useState, useEffect } from 'react';
import VideoShowcase from '../components/VideoShowcase';
import FAQSection from '../components/FAQSection'; // Assuming you have a FAQSection component
import Footer from '../components/Footer';

const images = [
  'https://cdn.theatlantic.com/thumbor/ZPuVFxy1fsEn9qwW5t9bmc7O-so=/0x0:4800x2700/960x540/media/img/mt/2023/04/abbott_elementary/original.jpg',
  'https://images.unsplash.com/photo-1570545917537-873e36d4f64a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBjaGlsZHJlbnxlbnwwfHwwfHx8MA%3D%3D',
  'https://npr.brightspotcdn.com/dims4/default/4765a65/2147483647/strip/true/crop/2997x1998+0+0/resize/880x587!/quality/90/?url=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2023%2F02%2F13%2F165227_0738_slide-8a25eb83e7d87d4d826e8851ab38948f3bd79e13.jpg',
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen">
      {/* Image Slider */}
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src={images[currentImage]}
          alt="slider"
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
       <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-white text-4xl md:text-5xl font-extrabold px-4 py-2 rounded-lg shadow-2xl "
                    style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.7)' }}>
                 Welcome to <span className="text-blue-400">GreatKidsPlatform</span>
             </div>
    </div>
        </div>  

      {/* Hero Section */}
      <section className="py-16 px-6 text-center bg-gray-100">
      <h1
  className="text-4xl md:text-5xl font-bold mb-4 text-blue-500"
  style={{ textShadow: '2px 2px 4px black'}}
>
  Innovate. Inspire. Impact.
</h1>

<p
  className="text-lg md:text-xl mb-6 max-w-2xl mx-auto text-white"
  style={{ textShadow: '1px 1px 3px black' }}
>
  We build modern solutions to empower your digital journey. Join us and shape the future.
</p>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>
        {/* Video Showcase */}  
        <VideoShowcase/>
        {/* FAQ Section */}
        <FAQSection/>
        {/* Footer */}
        <Footer/>
    </div>
  );
};

export default Home;
