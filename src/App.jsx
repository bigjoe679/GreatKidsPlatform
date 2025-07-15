import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';  
import Contact from './pages/Contact';
<<<<<<< HEAD
import Login from './pages/Login';
import SignUp from './pages/SignUp'; // ✅ Import Signup
=======
import Login from './pages/login';
import Signup from './pages/Signup';
>>>>>>> 0a8f67d (Fix case sensitivity issue for SignUp component)
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="flex flex-col flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
<<<<<<< HEAD
          <Route path="/signup" element={<SignUp />} />
=======
         <Route path="/signup" element={<Signup />} />
>>>>>>> 0a8f67d (Fix case sensitivity issue for SignUp component)
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
