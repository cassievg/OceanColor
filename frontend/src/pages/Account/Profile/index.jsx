import { Navigate, Link } from 'react-router-dom';
import './index.css';

const Profile = () => {
	const { isAuthenticated, profile } = useAuth();

    return (
        <div className='profile-container'></div>
    );
}