import React from 'react';
import { useAuth } from '../../Context/AuthContext';
import { Navigate, Link } from 'react-router-dom';
import './Account.css';

const Account = () => {
  const { isLoggedIn, userRole } = useAuth();

  return (
    <div className="account-page">
      <div className="account-box">
        <p className="account-text">Please log in or create an account to get started.</p>
        <div className="account-buttons">
          <Link to="/account/login" className="btn btn-primary w-100 mb-3">Login</Link>
          <Link to="/account/register" className="btn btn-outline-primary w-100">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Account;
