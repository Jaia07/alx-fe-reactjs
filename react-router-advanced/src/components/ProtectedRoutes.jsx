import { Route, Navigate, Outlet } from "react-router-dom"

// Function that checks if the user is authenticated
const isAuthenticated = () => {
     // Replace with your authentication logic, for instance checking if a token exists in local storage
     return localStorage.getItem('authToken') !== null;
}

// Custom Route component that checks for authentication
const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated()) {
        console.log('Not Authenticated');
        return <Navigate to="/login" replace />; // Redirect to login
    }

    return children ? children : <Outlet />; // Render children or Outlet
}

export default ProtectedRoute