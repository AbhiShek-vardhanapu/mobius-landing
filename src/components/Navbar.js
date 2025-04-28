
import React from 'react';
//import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.avif';  

function Navbar() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
<div className="navbar-logo">
<img src={logo} alt="Mobius Logo" /></div>      <ul className="navbar-links">
        <li onClick={() => handleScroll('hero')}>Home</li>
        <li onClick={() => handleScroll('about')}>About Us</li>
        <li onClick={() => handleScroll('plans')}>Plans</li>
        <li onClick={() => handleScroll('testimonials')}>Testimonials</li>
        <li onClick={() => handleScroll('privacy')}>Privacy Policy</li>
      </ul>
      <div className="navbar-signup">
        <a href="/signup" className="signup-button">Sign Up</a>
      </div>
          </nav>
  );
}

export default Navbar;


