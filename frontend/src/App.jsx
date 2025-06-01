// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Account from './pages/Account/Account';
import Login from './pages/Account/Login/index';
import Register from './pages/Account/Register/index';
import Settings from './pages/Account/Settings/index';
import { CartProvider } from './Context/CartContext';
import Navbar from './components/NavBar/navbar';
import TicketList from './pages/TicketList/index';
import UpdateTicket from './pages/UpdateTicket';
import StaffManager from './pages/Admin/StaffManager';
import CreateTicket from './pages/Customer/CreateTicket';
import Profile from './pages/Account/Profile/index';
import CreateAccount from  './pages/Admin/CreateAccount';

import './App.css';

function App() {
    return (
        <CartProvider>
            <div className='app-container'>
                <Navbar />
                <Routes>
                    {/* Level 3 */}
                    <Route path="/admin/manager" element={<StaffManager />}/>
                    <Route path="/admin/createaccount" element={<CreateAccount />}/>
                    

                    {/* Level 2 */}
                    <Route path="/tickets" element={<TicketList />}/>
                    
                    {/* Level 1 */}
                    <Route path="/account">
                        <Route index element={<Account />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="settings" element={<Settings />} />
                    </Route>
                    <Route path="/tickets/edit" element={<UpdateTicket />}/>
                    {/* Cannot be accessed by Level 2, can be accessed by Level 3 */}
                    <Route path="/tickets/create" element={<CreateTicket />}/>
                    {/* Cannot be accessed by other levels */}

                    {/* Level 0 */}
                    <Route path="/" element={<About />}/>
                    {/* Cannot be accessed by other levels */}
                    <Route path="/account">
                        <Route index element={<Account />} />
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                    </Route>
                </Routes>
            </div>
        </CartProvider>
        
    );
}

export default App;