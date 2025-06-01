import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>About <span className="highlight">Ocean Color</span></h1>
          <p className="lead">
            We're passionate about color and craftsmanship. Our mission is to help you transform your space with ease and inspiration.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <h2 className="section-title">Our Story</h2>
        <p className="text-content">
          Ocean Color started with a simple goal: to bring high-quality paints and tools to every home and business. We believe in making your space as beautiful and unique as you are, and our team is dedicated to providing top-notch products that make your projects easier and more enjoyable.
        </p>
      </section>

      {/* Our Values */}
      <section className="section alt-bg">
        <h2 className="section-title">Our Values</h2>
        <ul className="values-list">
          <li><strong>Quality</strong>: We only offer the best products that stand the test of time.</li>
          <li><strong>Innovation</strong>: Always looking for the latest trends and techniques to improve our offerings.</li>
          <li><strong>Customer Satisfaction</strong>: Your experience is our top priority, and we're here to support you at every step.</li>
          <li><strong>Sustainability</strong>: We're committed to eco-friendly practices and sustainable sourcing.</li>
        </ul>
      </section>

      {/* Meet the Team */}
      <section className="section">
        <h2 className="section-title">Meet the Team</h2>
        <div className="team-grid">
          {[
            {
              name: "Mr Sukarno",
              role: "Founder & CEO"
            },
            {
              name: "Ms Khadija",
              role: "Head of Operations"
            },
            {
              name: "Ms Athena",
              role: "Marketing Lead"
            }
          ].map((member, index) => (
            <div className="team-member" key={index}>
              <div className="team-member-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
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