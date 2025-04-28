
import React from 'react';
import '../styles/LoginSignup.css';

function SignupPage() {
  return (
    <div className="signup-page">
      <h2>Signup</h2>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default SignupPage;
