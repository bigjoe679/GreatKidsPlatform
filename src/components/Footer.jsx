import React from 'react';

const Footer = () => {
  const registeredUsers = 1205; // You can dynamically fetch this later

  return (
    <footer className="bg-blue-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Site Name + Message */}
        <div>
          <h2 className="text-2xl font-bold mb-4">GreatKidsPlatform</h2>
          <p className="text-sm text-gray-300">
            Empowering the next generation with creativity, curiosity, and kindness. Always learn, always grow!
          </p>
        </div>

        {/* Partners Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Our Partners</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>BrightMinds Foundation</li>
            <li>EduPlay Solutions</li>
            <li>Learn & Leap</li>
            <li>Happy Future Org</li>
          </ul>
        </div>

        {/* Meter / Counter */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-3">Registered Users</h3>
          <div className="bg-white text-blue-900 rounded-full px-6 py-3 inline-block font-bold text-lg shadow">
            {registeredUsers.toLocaleString()}+
          </div>
          <p className="text-sm text-gray-300 mt-2">and counting every day!</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-700 mt-10 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} GreatKidsPlatform. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
