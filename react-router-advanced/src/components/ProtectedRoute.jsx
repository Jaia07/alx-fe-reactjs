import { Route, Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./useAuth";

// Custom Route component that checks for authentication
const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();

    if (!user) {
        console.log('Not Authenticated');
        return <Navigate to="/login" replace />; // Redirect to login
    }

    return children ? children : <Outlet />; // Render children or Outlet
}

export default ProtectedRoute