// src/components/TestimonialsPage.js
import React from 'react';
import '../styles/TestimonialsPage.css';

const TestimonialsPage = () => {
  return (
    <div id="testimonials" className="testimonials-container">
      <h2>What Our Users Say</h2>

      <div className="testimonials-cards">
        <div className="testimonial-card">
          <p>"MobiusEngine helped me launch my app 10x faster. Super intuitive!"</p>
          <h4>- Sarah P.</h4>
        </div>

        <div className="testimonial-card">
          <p>"The AI features are mind-blowing. I created a product without coding!"</p>
          <h4>- James L.</h4>
        </div>

        <div className="testimonial-card">
          <p>"Excellent support team and easy to use interface. Highly recommend."</p>
          <h4>- Priya R.</h4>
        </div>
      </div>

      {/* New Section: Client Photos and Captions */}
      <h2>What our clients have to say</h2>
      <div className="clients-photos">
        <div className="client">
          <img src="/assets/sample.jpg" alt="Holly" className="client-photo" />
          <p className="client-caption">Holly is a senior executive who got over 10 job interviews and an offer she accepted.</p>
        </div>

        <div className="client">
          <img src="/assets/sample1.jpg" alt="Joshua" className="client-photo" />
          <p className="client-caption">Joshua is a senior software engineer who has accepted an offer.</p>
        </div>
      </div>

      <p className="more-testimonials">More customer testimonials at our LinkedIn page.</p>
    </div>
  );
};

export default TestimonialsPage;
