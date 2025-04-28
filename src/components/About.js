
import React from 'react';
import '../styles/About.css';

import ashwinImage from '../assets/about1.jpg';
import NicoleImage from '../assets/about2.jpg'; 

const About = () => {
  return (
    <section id="about" className="about-container">
      <h2 className="about-title">About Us</h2>
      <div className="about-content">
        <img src={ashwinImage} alt="Ashwin Founder" className="about-image" />
        <div className="about-text">
          <h3>Ashwin</h3>
          <p>Ashwin is the founder of MobiusEngine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University.</p>
          <p>Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.</p>
          <a href="https://www.linkedin.com/in/ashwin" target="_blank" rel="noopener noreferrer" className="linkedin-button">
            Ashwin's LinkedIn
          </a>
        </div>
        <img src={NicoleImage} alt="Nicole Founder" className="about-image" />
        <div className="about-text">
          <h3>Nicole</h3>
          <p>Nicole is an Executive coach at Mobius specializing in resume builds and career advisory.

</p>
          <p>With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.</p>
          <a href="https://www.linkedin.com/in/Nicole" target="_blank" rel="noopener noreferrer" className="linkedin-button">
            Nicole's LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
