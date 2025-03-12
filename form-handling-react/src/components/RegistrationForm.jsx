import React, { useState } from "react";

const RegistrationForm = () => {
    const [ formData, setFormData ] = useState({ username: '', email: '', password: '' });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevValues) => ({ ...prevValues, [name]: value }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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