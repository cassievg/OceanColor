import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../../../libs/request';
import './index.css';


const CreateAccount = () => {
    const [userDetails, setUserDetails] = useState({})
    const [indicator, setIndicator] = useState(false);

    const showIndicator = () => {
        setIndicator((prevIndicator) => !prevIndicator);
    }

    const updateDetails = (event) => {
        const {
            target
        } = event;

        setUserDetails((prevUserDetails) => ({
            ...prevUserDetails,
            [target.id]: target.value,
        }));
    }

    const createUser = async () => {
        await instance.post('/user/',
            {
                username:  userDetails.username,
                email: userDetails.email,
                phone: userDetails.phone,
                password: userDetails.password,
                level: userDetails.level
            }
        )
        showIndicator();
    }

    return (
        <div className="signup-page">
            <div className="signup-container">
                <h2 className="signup-title">Create Account</h2>
                <div className='form'>
                    <div class="mb-3 username">
                        <label for="username" class="form-label">Name</label>
                        <input class="form-control" type="text" aria-label="username" id="username" onChange={updateDetails}></input>
                    </div>
                    <div class="mb-3 email">
                        <label for="email" class="form-label">Email</label>
                        <input class="form-control" type="text" aria-label="email" id="email" onChange={updateDetails}></input>
                    </div>
                    <div class="mb-3 phone">
                        <label for="phone" class="form-label">Phone Number</label>
                        <input class="form-control" type="text" aria-label="phone" id="phone" onChange={updateDetails}></input>
                    </div>
                    <div class="mb-3 password">
                        <label for="password" class="form-label">Password</label>
                        <input class="form-control" type="password" aria-label="password" id="password" onChange={updateDetails}></input>
                    </div>
                    <select className="form-select permission-btn" aria-label="Default select example" id="level" onChange={updateDetails}>
                        <option selected>Permissions</option>
                        <option value="1">Customer</option>
                        <option value="2">Staff</option>
                        <option value="3">Admin</option>
                    </select>
                </div>
                <div className='buttons'>
                    <button onClick={createUser}>Create</button>
                </div>
                {
                indicator &&
                <div className='success-indicator'>
                    Ticket successfully created!
                </div>
                }
            </div>
        </div>
    );
};

export default CreateAccount;