import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to <span className="highlight">Ocean Color</span></h1>
          <p className="lead">
            Elevate your space with premium paint and tools designed for beauty and durability.
          </p>
          <Link to="/shop" className="btn-primary">Shop Now</Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <h2 className="section-title">Featured Products</h2>
        <div className="products-grid">
          {[
            {
              img: '/assets/images/bottle.jpg',
              title: "Premium Paint",
              desc: "High-quality paint for your home or business.",
            },
            {
              img: '/assets/images/tools.jpeg',
              title: "Paint Tools",
              desc: "The best tools for a smooth, professional finish.",
            },
            {
              img: '/assets/images/all.png',
              title: "Color Palettes",
              desc: "Find the perfect color for any room or project.",
            }
          ].map((item, index) => (
            <div className="product-card" key={index}>
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <Link to="/shop" className="btn-secondary">View Product</Link>
            </div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="section alt-bg">
        <h2 className="section-title">About Ocean Color</h2>
        <p className="lead center-text">
          We're passionate about color and craftsmanship. Our mission is to help you transform your space with ease and inspiration.
        </p>
        <div className="center-text">
          <Link to="/about" className="btn-primary">Learn More</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonials-grid">
          {[
                {
      "quote": "Ocean Color has been my go-to place. I love everything about this store! Ocean Color transformed my home. The paint quality is amazing and the service was top-notch!",
      "author": "Mr. Bean",
      "role": "Customer"
    },
    {
      "quote": "I loved the variety of tools. Everything I needed was in one place, and the staff was incredibly helpful in guiding me to the right products for my project.",
      "author": "Miss Nora",
      "role": "DIY Enthusiast"
    },
    {
      "quote": "The paint colors were exactly what I was looking for. Highly recommend! The finishes are durable, and the shades stayed true even after years. Perfect for my clients' homes.",
      "author": "Ms. Jez",
      "role": "Interior Designer"
    },
    {
      "quote": "The eco-friendly paint options are a game-changer! Not only do they look stunning, but they also have minimal odor, making them ideal for quick home makeovers.",
      "author": "Mr. Curry",
      "role": "Home Renovator"
    },
    {
      "quote": "As an artist, I appreciate the vibrant pigment selection. Ocean Color’s paints blend beautifully and give my murals a professional finish.",
      "author": "Ms. Siri",
      "role": "Mural Artist"
    }
          ].map((t, i) => (
            <div className="testimonial-card" key={i}>
              <p className="testimonial-text">“{t.quote}”</p>
              <p className="testimonial-author">{t.author}</p>
              <p className="testimonial-role">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Ocean Color. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
