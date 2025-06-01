import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';

import ImgOcean from '../../img/ocean_color_logo.jpg';
import AboutUs from '../../img/about_us.png';
import Tickets from '../../img/ticket_icon.png';
import Account from '../../img/account_icon.png';
import addAccount from '../../img/add_account_icon.png';
import Staff from '../../img/staff_icon.png';

import './navbar.css';

const Navbar = () => {
const { isAuthenticated, profile } = useAuth();

return (
	<div className="navbar-container">
		<div className='navbar-stick'>
			<Nav className="navbar-sidebar">
				<div className="nav-items-top">
				<Nav.Item className="brand-name">
					<img src={ImgOcean} alt='Logo' className='logo rounded'></img>
					Ocean Color
				</Nav.Item>
				<Nav.Item>
					<Nav.Link as={NavLink} to="/" className="nav-link">
						<img src={AboutUs} alt='Info' className='icon rounded'></img>
						About Us
					</Nav.Link>
				</Nav.Item>

				{/* Everyone can see */}
				{
					isAuthenticated &&
					<Nav.Item>
						<Nav.Link as={NavLink} to="/tickets" className="nav-link">
						<img src={Tickets} alt='Account' className='icon rounded'></img>
						Tickets
						</Nav.Link>
					</Nav.Item>
				}

				{/* Customer only */}
				{
					isAuthenticated && profile.level === 1 &&
					<Nav.Item>
						<Nav.Link as={NavLink} to="/tickets/create" className="nav-link">
						<img src={Account} alt='Account' className='icon rounded'></img>
						Create Ticket
						</Nav.Link>
					</Nav.Item>
				}

				{/* Admin only */}
				{
					isAuthenticated && profile.level === 3 &&
					<Nav.Item>
						<Nav.Link as={NavLink} to="/admin/manager" className="nav-link">
						<img src={Staff} alt='Staff' className='icon rounded'></img>
						Staffs
						</Nav.Link>
					</Nav.Item>
				}

				{/* Admin only */}
				{
					isAuthenticated && profile.level === 3 &&
					<Nav.Item>
						<Nav.Link as={NavLink} to="/admin/createaccount" className="nav-link">
						<img src={addAccount} alt='Account' className='icon rounded'></img>
						Create Account
						</Nav.Link>
					</Nav.Item>
				}

				<Nav.Item>
					<Nav.Link as={NavLink} to="/account" className="nav-link">
					<img src={Account} alt='Account' className='icon rounded'></img>
					Account
					</Nav.Link>
				</Nav.Item>
				</div>
			</Nav>
		</div>
	</div>
);
};

export default Navbar;
