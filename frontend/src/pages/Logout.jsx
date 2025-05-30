// Logout.js (or wherever the logout button is placed)
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';

const Logout = () => {
  const { logout } = useAuth();
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push('/'); // Redirect to Home page (public page)
  };

  return <button onClick={handleLogout}>Log Out</button>;
};

export default Logout;
