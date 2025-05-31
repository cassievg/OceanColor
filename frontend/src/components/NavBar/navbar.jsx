import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const isLoggedIn = true; // Replace with actual login logic

  return (
    <div className="navbar-container">
      <div className='navbar-stick'>
        <Nav className="navbar-sidebar">
        <div className="nav-items-top">
          <Nav.Item>
            <Nav.Link as={NavLink} to="/" className="nav-link brand-name">
              Ocean Color
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/" className="nav-link">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/about" className="nav-link">About Us</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/shop" className="nav-link">Shop</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/contact" className="nav-link">Contact</Nav.Link>
          </Nav.Item>
          {isLoggedIn && (
            <Nav.Item>
              <Nav.Link as={NavLink} to="/cart" className="nav-link">Cart</Nav.Link>
            </Nav.Item>
          )}
        </div>

        <div className="account-section">
          {isLoggedIn ? (
            <Button as={NavLink} to="/account" variant="outline-primary" className="logout-btn w-100">
              Account
            </Button>
          ) : (
            <>
              <Nav.Item>
                <Nav.Link as={NavLink} to="/login" className="nav-link">Login</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={NavLink} to="/signup" className="nav-link">Sign Up</Nav.Link>
              </Nav.Item>
            </>
          )}
        </div>
      </Nav>
      </div>
    </div>
  );
};

export default Navbar;
