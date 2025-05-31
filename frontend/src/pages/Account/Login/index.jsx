// src/pages/Account/Login.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../Context/AuthContext';

import instance from '../../../libs/request';
import './index';

const Login = () => {
    const [userDetails, setUserDetails] = useState({});

    const { setIsAuthenticated, setProfile } = useAuth();
    const navigate = useNavigate();

    const updateDetails = (event) => {
        const {
            target
        } = event;

        setUserDetails((prevUserDetails) => ({
            ...prevUserDetails,
            [target.id]: target.value,
        }));
    }

    const login = async () => {
        const response = await instance.post('/auth/login',
            {
                email:  userDetails.email,
                password: userDetails.password
            }
        );

        setProfile(response.data);
        setIsAuthenticated(true);
    }

    return (
        <div className="signup-page">
            <div className="signup-container">
                <h2 className="signup-title">Sign Up</h2>
                <div className='form'>
                    <div class="mb-3 email">
                        <label for="email" class="form-label">Email</label>
                        <input class="form-control" type="text" aria-label="email" id="email" onChange={updateDetails}></input>
                    </div>
                    <div class="mb-3 password">
                        <label for="password" class="form-label">Password</label>
                        <input class="form-control" type="password" aria-label="password" id="password" onChange={updateDetails}></input>
                    </div>
                </div>
                <div className='buttons'>
                    <button onClick={login}>Log In</button>
                </div>
                <div className='signup-instead'>
                    <button className="signup-button" onClick={ () => navigate('/account/register') }>Dont have an account? Sign up now!</button>
                </div>
            </div>
        </div>
    );
};

export default Login;