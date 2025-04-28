import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <h1>Build your Future with MobiusEngine</h1>
      <h3>Land job interviews 10x faster</h3>

      <div className="steps">
        <div className="step">
          <span className="step-number">Step 1:</span>
          <span className="step-description">Submit Intake Form</span>
        </div>
        <div className="step">
          <span className="step-number">Step 2:</span>
          <span className="step-description">We do the search and curation for list of jobs</span>
        </div>
        <div className="step">
          <span className="step-number">Step 3:</span>
          <span className="step-description">You approve, we do the tedious part (applying)</span>
        </div>
        <div className="step">
          <span className="step-number">Step 4:</span>
          <span className="step-description">You get the interviews</span>
        </div>
      </div>

      <p>Your career, our mission — let's grow together.</p>
    </section>
  );
}

export default Hero;
