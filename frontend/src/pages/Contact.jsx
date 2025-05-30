import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

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

const Contact = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
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

      <section className="contact-content">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input id="name" type="text" placeholder="Your Name" className="form-input" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input id="email" type="email" placeholder="Your Email" className="form-input" required />
          </div>
          <div className="form-group">
            <label htmlFor="branch">Select Branch</label>
            <select id="branch" className="form-input" required>
              <option value="">Select Branch</option>
              <option value="jakarta">Jakarta - Jln. Jembatan Besi Raya No. 209</option>
              <option value="surabaya">Surabaya - Jln. Raya Darmo No. 100</option>
              <option value="bandung">Bandung - Jln. Asia Afrika No. 88</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" placeholder="Your Message" rows="5" className="form-textarea" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>

      <section className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.3105549057573!2d106.8456!3d-6.2088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e4e6e321ab%3A0x6e7d6e6e6e6e6e6e!2sJakarta!5e0!3m2!1sen!2sid!4v1715240000000"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>

      <footer className="footer">
        <p>© 2025 Ocean Color. All rights reserved.</p>
        <Link to="/" className="btn-primary">Back to Home</Link>
      </footer>
    </div>
  );
};

export default Contact;
