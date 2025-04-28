// src/components/HomePage.js
import React from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Build Smarter, Launch Faster</h1>
        <p>MobiusEngine helps you create AI-powered products without writing a single line of code.</p>
        <div className="hero-buttons">
          <a href="/signup" className="btn-primary">Get Started</a>
          <a href="/plans" className="btn-outline">View Plans</a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
