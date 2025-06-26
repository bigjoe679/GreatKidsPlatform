import { motion } from 'framer-motion';

const VisionMissionSection = () => {
  return (
    <motion.section
      className="w-full py-24 px-6 bg-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-blue-500 text-center mb-16">
        Our Vision & Mission
      </h2>

      <div className="flex flex-col md:flex-row gap-16 items-center justify-center">
        {/* Our Vision */}
        <div className="flex-1 max-w-xl text-center">
          <h3 className="text-3xl font-semibold text-blue-600 mb-4">Our Vision</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            We envision a world where every child—regardless of background—has access to quality education, creative
            resources, and digital tools that nurture curiosity and lifelong learning. At GreatKidsPlatform, our
            vision is to unlock the full potential of every young mind.
          </p>
        </div>

        {/* Our Mission */}
        <div className="flex-1 max-w-xl text-center">
          <h3 className="text-3xl font-semibold text-blue-600 mb-4">Our Mission</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            Our mission is to provide a safe, inspiring, and engaging environment for children to learn, grow, and
            explore. Through technology-driven programs and creative experiences, we aim to support emotional,
            educational, and social development from early childhood onwards.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default VisionMissionSection;
