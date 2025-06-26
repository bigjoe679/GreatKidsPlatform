import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative">
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white flex items-center justify-between px-6 py-4 z-50">
        <div className="text-xl font-bold">GreatKidsPlatform</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/services" className="hover:underline">Services</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          <li><Link to="/login" className="hover:underline">Login</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
          <Menu size={24} />
        </button>
      </nav>

      {/* Sidebar for mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-blue-700 text-white shadow-lg z-50 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b border-blue-500">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col p-6 space-y-4">
          <li><Link to="/" className="hover:underline" onClick={() => setSidebarOpen(false)}>Home</Link></li>
          <li><Link to="/about" className="hover:underline" onClick={() => setSidebarOpen(false)}>About</Link></li>
          <li><Link to="/services" className="hover:underline" onClick={() => setSidebarOpen(false)}>Services</Link></li>
          <li><Link to="/contact" className="hover:underline" onClick={() => setSidebarOpen(false)}>Contact</Link></li>
          <li><Link to="/login" className="hover:underline" onClick={() => setSidebarOpen(false)}>Login</Link></li>
        </ul>
      </div>

      {/* Overlay when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Navbar;
