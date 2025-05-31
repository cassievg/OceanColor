import React, { useState } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
	const [name, setName] = useState('');
	const [userDetails, setUserDetails] = useState({})
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

	const updateUser = async () => {
		await instance.put('/user/',
			{
				username:  userDetails.username,
				email: userDetails.email,
				phone: userDetails.phone,
				password: userDetails.password
			}
		)
	}

	const logout = async () => {
        await instance.post('/auth/logout',
            {
                email:  userDetails.email,
                password: userDetails.password
            }
        );

        setProfile(null);
        setIsAuthenticated(false);

		navigate('/account/login');
    }

	return (
		<div className="settings-container">
			<div className="settings-page">
				<h2 className="settings-title">Account Settings</h2>
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
						<input class="form-control" type="text" aria-label="password" id="password" onChange={updateDetails}></input>
					</div>
				</div>
				<div className='buttons'>
					<button onClick={updateUser}>Save</button>
					<button onClick={logout}>Log out</button>
				</div>
			</div>
		</div>
	);
};

export default Settings;
