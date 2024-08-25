import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const isAuthenticated = !!localStorage.getItem('auth-token'); 

    return isAuthenticated ? children : <Navigate to="/admin" />;
};

export default PrivateRoute;
