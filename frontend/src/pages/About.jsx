import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to <span className="highlight">Ocean Color</span></h1>
          <p className="lead">
            We're passionate about color and craftsmanship. Our mission is to help you transform your space with ease and inspiration.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Ocean Color. All rights reserved.</p>
        <Link to="/" className="btn-primary">Back to Home</Link>
      </footer>
    </div>
  );
};

export default About;