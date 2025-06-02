import React, { createContext, useContext, useState, useEffect } from 'react';

import instance from '../libs/request';

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

function AuthProvider(props) {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [profile, setProfile] = useState({});

	useEffect(() => {
		const auth = async () => {
			try {
				const response = await instance.post('/auth/login');
				setIsAuthenticated(true);
				setProfile(response.data);
			}
			catch (err) {
			}
		}

		auth();
	}, []);

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated,
				setIsAuthenticated,
				profile,
				setProfile,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	)
}

export {
	AuthProvider,
	useAuth
};
