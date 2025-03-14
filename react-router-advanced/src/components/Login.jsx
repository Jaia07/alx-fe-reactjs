// Simple Login component
const Login = () => {
    const handleLogin = () => {
        // Logic to handle login, e.g., setting authentication token in local storage
        localStorage.setItem('authToken', 'your-token');
        window.location.href = '/profile'; // Redirect to the dashboard after login
    };

    return <button onClick={handleLogin}>Login</button>;
};

export default Login