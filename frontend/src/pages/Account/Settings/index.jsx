import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../Context/AuthContext';

import instance from '../../../libs/request';
import './index.css';

const Settings = () => {
	// const [name, setName] = useState('');
	const { profile } = useAuth();
	const [userDetails, setUserDetails] = useState({});
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
		await instance.put('/user/' + profile.id, 
			{
				username:  userDetails.username,
				email: userDetails.email,
				phone: userDetails.phone,
				password: userDetails.password
			}
		)

		navigate('./account/profile');
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
						<input class="form-control" type="password" aria-label="password" id="password" onChange={updateDetails}></input>
					</div>
				</div>
				<div className='buttons'>
					<button className='btn btn-primary' onClick={updateUser}>Save</button>
					<button className='btn btn-primary save-back' onClick={ () => navigate('/account') }>Back</button>
				</div>
			</div>
		</div>
	);
};

export default Settings;
