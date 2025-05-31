import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const faqs = [
  {
    question: 'How can I track my order?',
    answer: 'You will receive a tracking link via email after your order is processed. You can also check your account for updates.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Currently, we only ship within Indonesia. We plan to expand our shipping in the near future!',
  },
  {
    question: 'What’s your return policy?',
    answer: 'Returns are accepted within 7 days for unopened items. Contact us for return authorization and instructions.',
  },
  {
    question: 'Can I change my order after placing it?',
    answer: 'Once an order is placed, it cannot be modified. However, you can contact us immediately, and we will try to accommodate any changes before the order is processed.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept major credit cards, debit cards, and various e-wallet services. All payments are securely processed.',
  },
  {
    question: 'How can I contact customer service?',
    answer: 'You can reach us by email at support@oceancolor.com, or by phone at +62 812-3456-7890. Our team is available during business hours.',
  },
];

const About = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className='about-page-container'>
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
        <p className="text-content text-center">
          Ocean Color started with a simple goal: to bring high-quality paints and tools to every home and business. 
          We believe in making your space as beautiful and unique as you are, and our team is dedicated to providing top-notch products that make your projects easier and more enjoyable.
        </p>
      </section>

      {/* Our Values */}
      <section className="section alt-bg">
        <h2 className="section-title">Our Values</h2>
        <div className='value-content'>
          <ul className="values-list">
          {/* Remake this list into grids instead (continued later) */}
          <li><strong>Quality</strong>: We only offer the best products that stand the test of time.</li>
          <li><strong>Innovation</strong>: Always looking for the latest trends and techniques to improve our offerings.</li>
          <li><strong>Customer Satisfaction</strong>: Your experience is our top priority, and we're here to support you at every step.</li>
          <li><strong>Sustainability</strong>: We're committed to eco-friendly practices and sustainable sourcing.</li>
        </ul>
        </div>

      </section>
          </div>
          <div className="contact-wrapper">
            <header className="contact-header">
              <h1 className="contact-title">Get in Touch with Ocean Color</h1>
              <p className="contact-subtext">We’re here to assist you. If you have any questions or need help, reach out to us!</p>
              <p className="contact-hours">📅 <strong>Business Hours:</strong> Mon - Fri, 9AM to 6PM (WIB)</p>
            </header>
      
            <section className="faq-section">
              <h2 className="faq-section-title">Got Questions? We’ve Got Answers!</h2>
              {faqs.map((faq, index) => (
                <div key={index} className={`faq-item ${activeFAQ === index ? 'active' : ''}`}>
                  <h4 onClick={() => toggleFAQ(index)} className="faq-question">
                    {faq.question}
                    <span className="arrow">{activeFAQ === index ? '▲' : '▼'}</span>
                  </h4>
                  {activeFAQ === index && <p className="faq-answer">{faq.answer}</p>}
                </div>
              ))}
            </section>
                <footer className="footer">
                  <p>© 2025 Ocean Color. All rights reserved.</p>
                  <Link to="/" className="btn-primary">Back to Home</Link>
                </footer>
          </div>
      



    </div>
    
  );
};

export default About;