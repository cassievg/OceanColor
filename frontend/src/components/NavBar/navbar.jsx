import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import './navbar.css';

const Navbar = () => {
const { isAuthenticated, profile } = useAuth();

return (
	<div className="navbar-container">
		<div className='navbar-stick'>
			<Nav className="navbar-sidebar">
				<div className="nav-items-top">
				<Nav.Item className="brand-name">
					Ocean Color
				</Nav.Item>
				<Nav.Item>
					<Nav.Link as={NavLink} to="/" className="nav-link">About Us</Nav.Link>
				</Nav.Item>

				{/* Everyone can see */}
				{
					isAuthenticated &&
					<Nav.Item>
						<Nav.Link as={NavLink} to="/tickets" className="nav-link">Tickets</Nav.Link>
					</Nav.Item>
				}

				{/* Customer only */}
				{
					isAuthenticated && profile.level === 1 &&
					<Nav.Item>
						<Nav.Link as={NavLink} to="/tickets/create" className="nav-link">Create Ticket</Nav.Link>
					</Nav.Item>
				}

				{/* Admin only */}
				{
					isAuthenticated && profile.level === 3 &&
					<Nav.Item>
						<Nav.Link as={NavLink} to="/admin/manager" className="nav-link">Staffs</Nav.Link>
					</Nav.Item>
				}

				{/* Admin only */}
				{
					isAuthenticated && profile.level === 3 &&
					<Nav.Item>
						<Nav.Link as={NavLink} to="/admin/createaccount" className="nav-link">Create Account</Nav.Link>
					</Nav.Item>
				}

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
