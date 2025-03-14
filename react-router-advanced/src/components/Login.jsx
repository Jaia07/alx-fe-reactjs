import { useNavigate } from 'react-router-dom'
import { useAuth } from './useAuth';

// Simple Login component
const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        // Logic to handle login, e.g., setting authentication token in local storage
        login('your-token');
        navigate('/profile'); // Redirect to the dashboard after login
    };

    return <button onClick={handleLogin}>Login</button>;
};

export default Login