import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

function AuthProvider(props) {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [profile, setProfile] = useState(null);

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
