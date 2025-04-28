// src/components/LoginPage.js
import React from 'react';
import '../styles/LoginSignup.css';

const LoginPage = () => {
  return (
    <div className="auth-container">
      <h2>Log In</h2>
      <form className="auth-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button className="btn-primary" type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;
