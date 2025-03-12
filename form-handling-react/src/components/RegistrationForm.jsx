import React, { useState } from "react";

const RegistrationForm = () => {
    const [ formData, setFormData ] = useState({ username: '', email: '', password: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevValues) => ({ ...prevValues, [name]: value }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!username) {
            newErrors.username = "Username is required";
        }
        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log(formData);
        }
        console.log(formData)
    }


    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            name="username"
            value={username} 
            onChange={handleChange}
            placeholder="Enter Your Username"
            />

            <input 
            type="email"
            name="email"
            value={email} 
            onChange={handleChange}
            placeholder="Enter Your Email"
            />

            <input 
            type="password"
            name="password"
            value={password} 
            onChange={handleChange}
            placeholder="Enter Your Password"
            />

            <button type="submit">Submit</button>
        </form>
    );
};

export default RegistrationForm;