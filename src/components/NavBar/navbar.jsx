import { useState } from 'react';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function NavBar() {
    return (
        <>
            <nav className="nav flex-column">
                <div className="container-fluid brand">
                    <a className="nav-brand" href="#">
                        <img src="/src/assets/logo.svg" />
                        Ocean Color
                    </a>
                </div>
                
                {/*Logged out user can only see about us page, logged in user and staff can see everything but manage staff*/}
                <div className="container-fluid navlink">
                    <a className="nav-link" href="#">
                        <img src="/src/assets/symbol.svg" />
                        About Us
                    </a>
                </div>
                <div className="container-fluid navlink">
                    <a className="nav-link" href="#">
                        <img src="/src/assets/symbol.svg" />
                        Dashboard
                    </a>
                </div>
                <div className="container-fluid navlink">
                    <a className="nav-link" href="#">
                        <img src="/src/assets/symbol.svg" />
                        Tickets
                    </a>
                </div>
                <div className="container-fluid navlink">
                    <a className='nav-link' href='#'>
                        <img src="/src/assets/symbol.svg" />
                        Manage Staff
                    </a>
                </div>
                <div className="container-fluid navlink">
                    <a className="nav-link" href="#">
                        <img src="/src/assets/symbol.svg" />
                        Account
                    </a>
                </div>
                <div id='button'>
                    <div className="container-fluid button">
                        <button type="button" className="btn">Button</button>
                    </div>
                </div>
                
            </nav>
        </> 
    )
}

export default NavBar;