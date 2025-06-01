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
                <div className="profile-details">
                    <div className="row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                        <div className="col-sm-10">
                            <input type="text" readOnly className="form-control-plaintext" id="username" defaultValue={profile.username} />
                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" readOnly className="form-control-plaintext" id="email" defaultValue={profile.email} />
                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor="phone" className="col-sm-2 col-form-label">Phone Number</label>
                        <div className="col-sm-10">
                            <input type="text" readOnly className="form-control-plaintext" id="phone" defaultValue={profile.phone} />
                        </div>
                    </div>
                </div>
            }
			<button className="logout-button" onClick={logout}>Log out</button>
			<button className="logout-button logout-back" onClick={ () => navigate('/account') }>Back</button>
        </div>
    );
}

export default Profile;