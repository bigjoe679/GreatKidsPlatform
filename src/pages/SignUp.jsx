import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    purpose: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, address, purpose, email, password, confirmPassword } = formData;

    if (!fullName || !address || !purpose || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setError('');
      console.log('User signed up:', { fullName, address, purpose, email });
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
      console.error(err.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-gradient-to-br from-blue-100 to-purple-200 overflow-x-hidden">
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md">
          {/* Updated heading styling */}
          <h2 className="text-4xl font-extrabold mb-8 text-center text-blue-700 tracking-wide">
            Create Your Account
          </h2>

          {error && <p className="text-red-600 mb-6 text-sm text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-3 border rounded-xl focus:ring-3 focus:ring-blue-300 focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-semibold text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-3 border rounded-xl focus:ring-3 focus:ring-blue-300 focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="purpose" className="block text-sm font-semibold text-gray-700">Purpose for Signing Up Your Child</label>
              <textarea
                name="purpose"
                id="purpose"
                value={formData.purpose}
                onChange={handleChange}
                rows={3}
                className="mt-2 w-full px-4 py-3 border rounded-xl focus:ring-3 focus:ring-blue-300 focus:outline-none resize-none"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-3 border rounded-xl focus:ring-3 focus:ring-blue-300 focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-3 border rounded-xl focus:ring-3 focus:ring-blue-300 focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-3 border rounded-xl focus:ring-3 focus:ring-blue-300 focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition duration-200"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-700">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 hover:underline font-semibold">
              Login
            </a>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Signup;
