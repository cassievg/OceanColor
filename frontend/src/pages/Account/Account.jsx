import React from 'react';
import { useAuth } from '../../Context/AuthContext';
import { Navigate, Link } from 'react-router-dom';
import instance from '../../libs/request';
import './Account.css';

const Account = () => {
	const { isAuthenticated } = useAuth();

	return (
			<div className="account-page">
				<div className="account-box">
					<div className="account-buttons">

						{/* Unauthenticated users */}
						{
							!isAuthenticated &&
							<>
								<p>Please Login or Sign up to continue further</p>
								<Link to="/account/login" className="btn btn-primary w-100 mb-3">Login</Link>
								<Link to="/account/register" className="btn btn-outline-primary w-100">Sign Up</Link>
							</>
						}

						{/* Authenticated users */}
						{
							isAuthenticated &&
							<>
								<Link to="/account/profile" className="btn btn-primary w-100 mb-3">Profile</Link>
								<Link to="/account/settings" className="btn btn-primary w-100 mb-3">Settings</Link>
							</>
						}

					</div>
				</div>
			</div>
		);
	};

export default Account;
