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
import Navbar from './components/NavBar/navbar';
import TicketList from './pages/TicketList/index';
import ApproveTicket from './pages/Customer/ApproveTicket/index';
import CustDashboard from './pages/Customer/CustDashboard/index';
import UpdateTicket from './pages/Staff/UpdateTicket';
import StaffManager from './pages/Admin/StaffManager';

import './App.css';

function App() {
    return (
        <CartProvider>
            <div className='app-container'>
                <Navbar />
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<StaffManager />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    {/* <Route path="/shop" element={<Shop />} />
                    <Route path="/cart" element={<Cart />} /> */}

                    {/* Account Routes */}
                    <Route path="/account">
                        <Route index element={<Account />} />
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                    </Route>

                    {/* Protected Routes */}
                    <Route path="/account/settings" element={<Settings />} />

                    {/* Customer-only Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/customerpage/about" element={<About />} />
                    <Route path="/customerpage/contact" element={<Contact />} />
                    {/* <Route path="/customerpage/shop" element={<Shop />} />
                    <Route path="/customerpage/cart" element={<Cart />} /> */}

                    {/* Staff-only Routes */}
                    {/* <Route path="/staff/tickets" element={<TicketManagement />} /> */}

                    {/* Admin-only Routes */}
                    {/* <Route path="/admin/staff" element={<StaffManagement />} /> */}
                </Routes>
            </div>
        </CartProvider>
        
    );
}

export default App;