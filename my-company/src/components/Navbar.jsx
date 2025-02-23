import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div >
            <ul style={{ backgroundColor: 'grey', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15px 8%', gap: '15px' }}>
                <li style={{ listStyleType: 'none' }}><Link to="/">Home</Link></li>
                <li style={{ listStyleType: 'none' }}><Link to="/about">About</Link></li>
                <li style={{ listStyleType: 'none' }}><Link to="/services">Services</Link></li>
                <li style={{ listStyleType: 'none' }}><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
} 

export default Navbar