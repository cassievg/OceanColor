// src/pages/Account/Login.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import './Login.css';  // Import the CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Replace with actual API call
      const user = await authenticateUser(email, password);
      
      login(user);
      
      // Redirect based on role
      switch(user.role) {
        case 'admin':
          navigate('/admin/staff');
          break;
        case 'staff':
          navigate('/staff/tickets');
          break;
        default:
          navigate('/customer/ticket');
      }
    } catch (err) {
      setError('Failed to login: ' + err.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </form>
        <p className="login-text">
          Don't have an account? <a href="/signup" className="signup-link">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

// Mock authentication - replace with real API call
async function authenticateUser(email, password) {
  // This is mock data - in real app, you would call your backend
  const users = [
    { id: 1, email: 'admin@oceancolor.com', password: 'admin123', role: 'admin', name: 'Admin' },
    { id: 2, email: 'staff@oceancolor.com', password: 'staff123', role: 'staff', name: 'Staff' },
    { id: 3, email: 'customer@oceancolor.com', password: 'customer123', role: 'customer', name: 'Customer' }
  ];

  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    throw new Error('Invalid credentials');
  }
  
  // Return only necessary user data
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role
  };
}

export default Login;