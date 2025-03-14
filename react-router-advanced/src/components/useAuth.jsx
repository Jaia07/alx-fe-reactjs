// src/hooks/useAuth.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem('authToken') ? { token: localStorage.getItem('authToken') } : null);

    const login = (token) => {
        localStorage.setItem('authToken', token);
        setUser({ token });
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        setUser(null);
    };

    const value = {
        user,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);