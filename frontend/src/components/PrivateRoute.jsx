// src/components/PrivateRoute.js
import { useAuth } from '../Context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ allowedRoles }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/account/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(currentUser.role)) {
    return <Navigate to="/" replace />; // or to an unauthorized page
  }

  return <Outlet />;
};

export default PrivateRoute;