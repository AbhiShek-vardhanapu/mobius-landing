// src/components/PlansPage.js
import React from 'react';
import '../styles/PlansPage.css';

const PlansPage = () => {
  return (
    <div id="plans" className="plans-container">

      <h2 className="plans-title">Choose Your Plan</h2>
      <div className="plans-cards">
        <div className="plan-card">
          <h3>Starter</h3>
          <p className="plan-price">$9/month</p>
          <ul>
            <li>Basic AI tools</li>
            <li>Up to 5 projects</li>
            <li>Email support</li>
          </ul>
          <a href="/signup" className="btn-primary">SELECT PLAN</a>
        </div>

        <div className="plan-card popular">
          <h3>Pro</h3>
          <p className="plan-price">$29/month</p>
          <ul>
            <li>All Starter features</li>
            <li>Unlimited projects</li>
            <li>Priority support</li>
            <li>Advanced analytics</li>
          </ul>
          <a href="/signup" className="btn-primary">SELECT PLAN</a>
        </div>

        <div className="plan-card">
          <h3>Enterprise</h3>
          <p className="plan-price">Custom</p>
          <ul>
            <li>All Pro features</li>
            <li>Dedicated manager</li>
            <li>Custom integrations</li>
          </ul>
          <a href="/signup" className="btn-primary">SELECT PLAN</a>
        </div>
      </div>
    </div>
  );
};

export default PlansPage;
/*
import React from 'react';
import '../styles/PlansPage.css';

function PlansPage() {
  return (
    <section id="plans" className="plans-section">
      <h2>Our Plans</h2>
      <div className="plans-container">
        <div className="plan-card">
          <h3>Starter</h3>
          <p>Resume building and basic applications.</p>
          <p>$99/month</p>
        </div>
        <div className="plan-card">
          <h3>Plus</h3>
          <p>Applications + Career Coaching Sessions.</p>
          <p>$299/month</p>
        </div>
        <div className="plan-card">
          <h3>Advanced</h3>
          <p>Full application management, interviews, and offer negotiation.</p>
          <p>$499/month</p>
        </div>
      </div>
    </section>
  );
}

export default PlansPage;
*/