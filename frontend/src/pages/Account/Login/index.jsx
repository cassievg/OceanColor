// src/pages/Account/Login.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../Context/AuthContext';

import instance from '../../../libs/request';
import './index.css';

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

        navigate('../../tickets');
    }

    return (
        <div className="login-page">
            <div className="login-container">
                <h2 className="login-title">Log In</h2>
                <div className='form'>
                    <div class="mb-3 email">
                        <label for="email" class="form-label">Email</label>
                        <input class="form-control" type="text" required aria-label="email" id="email" onChange={updateDetails}></input>
                    </div>
                    <div class="mb-3 password">
                        <label for="password" class="form-label">Password</label>
                        <input class="form-control" type="password" required aria-label="password" id="password" onChange={updateDetails}></input>
                    </div>
                </div>
                <div className='buttons'>
                    <button onClick={login}>Log In</button>
                </div>
                <div className='login-instead'>
                    <button className="login-button" onClick={ () => navigate('/account/register') }>Dont have an account? Sign up now!</button>
                </div>
            </div>
        </div>
    );
};

export default Login;