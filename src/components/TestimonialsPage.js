import React from 'react';
import '../styles/TestimonialsPage.css';
import clientImage from '../assets/sample.jpg'; // (optional)
import clientImage1 from '../assets/sample1.jpg'; 
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

      <div className="clients-testimonials">
        <h3>What our clients have to say</h3>
        <img src={clientImage} alt="Happy Clients" className="clients-image" />

        <img src={clientImage1} alt="Happy Clients" className="clients-image" />
        <div className="clients-text">
          <p><strong>Holly</strong> is a senior executive who got over 10 job interviews and an offer she accepted.</p>
          <p><strong>Joshua</strong> is a senior software engineer who has accepted an offer.</p>
        </div>
        <a href="https://www.linkedin.com/company/mobiusengine" target="_blank" rel="noopener noreferrer" className="linkedin-link">
          More customer testimonials at our LinkedIn page
        </a>
      </div>

      {/* ------------------------- */}
      {/*  */}
      <div className="mobius-advanced">
        <h2>Mobius Advanced - Custom Resume for Every Job</h2>
        <p>We use our own proprietary AI model to customize each job application.</p>
        <p><em>*currently only available to our advanced customers</em></p>

        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/IGcxoasEfs8
"
            title="Mobius Advanced Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <ul>
          <li><strong>Trusted</strong> — Our founding team has over 40 years of experience in tech and recruiting.</li>
          <li><strong>Human based service</strong> — Dedicated and trained team. 360 degree services to support your career transition.</li>
          <li><strong>Be the first</strong> — Our advanced AI and human driven search and apply daily ensures you are the first to show up.</li>
        </ul>
      </div>
    </div>
  );
};

export default TestimonialsPage;
