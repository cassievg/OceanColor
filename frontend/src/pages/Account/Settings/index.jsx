import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../Context/AuthContext';

import instance from '../../../libs/request';
import './index.css';

const Settings = () => {
	// const [name, setName] = useState('');
	const { profile, setProfile } = useAuth();
	const [userDetails, setUserDetails] = useState({});
	const navigate = useNavigate();
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

	const updateUser = async () => {
		const response = await instance.put('/user/' + profile._id, 
			{
				username:  userDetails.username,
				email: userDetails.email,
				phone: userDetails.phone,
				password: userDetails.password
			}
		)
		
		setProfile({...response.data});
		
		showIndicator();
	}

	return (
		<div className="settings-container">
			<div className="settings-page">
				<h2 className="settings-title">Account Settings</h2>
				<div className='form'>
					<div class="mb-3 username">
						<label for="username" class="form-label">Name</label>
						<input class="form-control" type="text" aria-label="username" id="username" required defaultValue={profile.username} onChange={updateDetails}></input>
					</div>
					<div class="mb-3 email">
						<label for="email" class="form-label">Email</label>
						<input class="form-control" type="text" aria-label="email" id="email" required defaultValue={profile.email} onChange={updateDetails}></input>
					</div>
					<div class="mb-3 phone">
						<label for="phone" class="form-label">Phone Number</label>
						<input class="form-control" type="text" aria-label="phone" id="phone" required defaultValue={profile.phone} onChange={updateDetails}></input>
					</div>
					<div class="mb-3 password">
						<label for="password" class="form-label">Password</label>
						<input class="form-control" type="password" aria-label="password" id="password" required onChange={updateDetails}></input>
					</div>
				</div>
				<div className='buttons'>
					<button className='btn btn-primary' onClick={updateUser}>Save</button>
					<button className='btn btn-primary save-back' onClick={ () => navigate('/account') }>Back</button>
				</div>
				{
					indicator &&
					<div className='indicator'>
						Update successful!
					</div>
				}
			</div>
		</div>
	);
};

export default Settings;
