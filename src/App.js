
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import AboutUsSection from './components/About';
import PlansSection from './components/PlansPage';
import TestimonialsSection from './components/TestimonialsPage';
import PrivacyPolicySection from './components/PrivacyPolicy';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './components/SignupPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <HeroSection />
            <AboutUsSection />
            <PlansSection />
            <TestimonialsSection />
            <PrivacyPolicySection />
            <Footer />
          </>
        } />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
