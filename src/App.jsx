// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/shop';
import Cart from './pages/Cart';
import Account from './pages/Account/Account';
import Login from './pages/Account/Login';
import Register from './pages/Account/Register';
import Settings from './pages/Account/Settings';
import Ticket from './pages/Customer/Ticket';
import TicketManagement from './pages/Staff/TicketManagement';
import StaffManagement from './pages/Admin/StaffManagement';
import PrivateRoute from './components/PrivateRoute';
import { CartProvider } from './Context/CartContext';
import Navbar from './components/navbar';

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        
        {/* Account Routes */}
        <Route path="/account">
          <Route index element={<Account />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        
        {/* Protected Routes */}
        <Route element={<PrivateRoute allowedRoles={['customer', 'staff', 'admin']} />}>
          <Route path="/account/settings" element={<Settings />} />
        </Route>
        
        {/* Customer-only Routes */}
        <Route element={<PrivateRoute allowedRoles={['customer']} />}>
          <Route path="/customer/ticket" element={<Ticket />} />
        </Route>
        
        {/* Staff-only Routes */}
        <Route element={<PrivateRoute allowedRoles={['staff', 'admin']} />}>
          <Route path="/staff/tickets" element={<TicketManagement />} />
        </Route>
        
        {/* Admin-only Routes */}
        <Route element={<PrivateRoute allowedRoles={['admin']} />}>
          <Route path="/admin/staff" element={<StaffManagement />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;