import { useState } from 'react';
import './navbar.css';

function NavBar() {
    return (
        <>
            <nav class="nav flex-column">
                <div class="container-fluid brand">
                    <a class="nav-brand" href="#">
                        <img src="/src/assets/logo.svg" />
                        Ocean Color
                    </a>
                </div>
                
                {/*Logged out user can only see about us page, logged in user and staff can see everything but manage staff*/}
                <div class="container-fluid navlink">
                    <a class="nav-link" href="#">
                        <img src="/src/assets/symbol.svg" />
                        About Us
                    </a>
                </div>
                <div class="container-fluid navlink">
                    <a class="nav-link" href="#">
                        <img src="/src/assets/symbol.svg" />
                        Dashboard
                    </a>
                </div>
                <div class="container-fluid navlink">
                    <a class="nav-link" href="#">
                        <img src="/src/assets/symbol.svg" />
                        Tickets
                    </a>
                </div>
                <div class="container-fluid navlink">
                    <a class='nav-link' href='#'>
                        <img src="/src/assets/symbol.svg" />
                        Manage Staff
                    </a>
                </div>
                <div class="container-fluid navlink">
                    <a class="nav-link" href="#">
                        <img src="/src/assets/symbol.svg" />
                        Account
                    </a>
                </div>
                <div id='button'>
                    <div class="container-fluid button">
                        <button type="button" class="btn">Button</button>
                    </div>
                </div>
                
            </nav>
        </> 
    )
}

export default NavBar;