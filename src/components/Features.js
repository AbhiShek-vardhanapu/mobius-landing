import React from 'react';

function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <h2>Our Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Speed</h3>
            <p>Lightning-fast performance for real-time AI tasks.</p>
          </div>
          <div className="feature-card">
            <h3>Flexibility</h3>
            <p>Adaptable to various machine learning models.</p>
          </div>
          <div className="feature-card">
            <h3>Security</h3>
            <p>Top-grade encryption and safety measures.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
