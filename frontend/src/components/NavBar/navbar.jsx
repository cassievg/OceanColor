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
          {/* Link will change according to access */}
          <Nav.Item>
            <Nav.Link as={NavLink} to="/" className="nav-link brand-name">
              Ocean Color
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/" className="nav-link">About Us</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/tickets" className="nav-link">Tickets</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/tickets/create" className="nav-link">Create Ticket</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/admin/manager" className="nav-link">Staffs</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/account" className="nav-link">Account</Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link as={NavLink} to="/shop" className="nav-link">Shop</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/contact" className="nav-link">Contact</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/cart" className="nav-link">Cart</Nav.Link>
          </Nav.Item> */}
        </div>
      </Nav>
      </div>
    </div>
  );
};

export default Navbar;
