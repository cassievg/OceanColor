import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../Context/AuthContext';

import instance from '../../../libs/request';
import './index.css';;

const Profile = () => {
	const { profile } = useAuth();
    const { setIsAuthenticated, setProfile } = useAuth();
	const navigate = useNavigate();
    
    const logout = async () => {
        await instance.post('/auth/logout');

        setProfile(null);
        setIsAuthenticated(false);

		navigate('/account/login');
    }

    return (
        <div className='profile-container'>
            {
                <div class="profile-details">
                    <label for="username" class="col-sm-2 col-form-label">Username</label>
                    <div class="col-sm-10">
                        <input type="text" readonly class="form-control-plaintext" id="username" defaultValue={profile.username} />
                    </div>
                    <label for="email" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="text" readonly class="form-control-plaintext" id="email" defaultValue={profile.email} />
                    </div>
                    <label for="phone" class="col-sm-2 col-form-label">Phone Number</label>
                    <div class="col-sm-10">
                        <input type="text" readonly class="form-control-plaintext" id="phone" defaultValue={profile.phone} />
                    </div>
                </div>
            }
			<button onClick={logout}>Log out</button>
        </div>
    );
}

export default Profile;