import React, { useState } from 'react';
import { Button, Toast, ToastContainer } from 'react-bootstrap';
import { useCart } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import './Shop.css';

const products = [
  {
    id: 1,
    name: 'Paint Brushes',
    price: 'IDR 45,000',
    image: '/assets/images/brush.jpeg',
    description: 'High-quality paint brushes perfect for detailed and smooth painting.'
  },
  {
    id: 2,
    name: 'Paint Tray',
    price: 'IDR 75,000',
    image: '/assets/images/tray.jpeg',
    description: 'Smooth ocean-tone wall paint, ideal for calm, modern spaces.'
  },
  {
    id: 3,
    name: 'Powder Paint',
    price: 'IDR 190,000',
    image: '/assets/images/powder.jpeg',
    description: 'Premium powder-based pigment paint for vibrant artistic finishes.'
  },
  {
    id: 4,
    name: 'Paint Roller',
    price: 'IDR 150,000',
    image: '/assets/images/roller.jpeg',
    description: 'Durable roller set for quick and even application on large surfaces.'
  },
  {
    id: 5,
    name: 'Drawing brushes',
    price: 'IDR 60,000',
    image: '/assets/images/paintbrush.jpeg',
    description: 'Sturdy canvas board, ideal for acrylic and oil painting.'
  },
  {
    id: 6,
    name: 'Painter’s Tape',
    price: 'IDR 25,000',
    image: '/assets/images/tape.webp',
    description: 'Clean-edge painter’s tape for sharp, professional lines.'
  },
  {
    id: 7,
    name: 'Bottle Paint',
    price: 'IDR 135,000',
    image: '/assets/images/paint.jpg',
    description: 'Lightweight plastic palette for easy paint mixing and blending.'
  },
  {
    id: 8,
    name: 'Protective Gloves',
    price: 'IDR 40,000',
    image: '/assets/images/gloves.jpg',
    description: 'Comfortable and disposable gloves for clean, safe painting.'
  }
];

const Shop = () => {
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastPosition, setToastPosition] = useState({ top: 0, left: 0 });

  const handleAddToCart = (product, e) => {
    const productCard = e.target.closest('.product-card');
    const cardPosition = productCard.getBoundingClientRect();
    setToastPosition({
      top: cardPosition.top - 50,
      left: cardPosition.left + cardPosition.width / 2 - 100,
    });

    addToCart(product);
    setToastMessage(`${product.name} has been added to your cart.`);
    setShowToast(true);
  };

  return (
    <div className="shop-wrapper">
      <h1 className="shop-title">Shop Our Collection</h1>

      {/* Toast Notification */}
      <ToastContainer position="absolute" style={{ zIndex: 9999, top: toastPosition.top, left: toastPosition.left }}>
        <Toast
          bg="success"
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={2500}
          autohide
        >
          <Toast.Header closeButton={false}>
            <strong className="me-auto">Cart Updated</strong>
          </Toast.Header>
          <Toast.Body className="text-white">{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <div className="product-price">{product.price}</div>
            <Button
              className="add-to-cart-btn"
              variant="primary"
              onClick={(e) => handleAddToCart(product, e)}
            >
              Add to Cart
            </Button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Ocean Color. All rights reserved.</p>
        <Link to="/" className="btn-primary">Back to Home</Link>
      </footer>
    </div>
  );
};

export default Shop;
