import React from "react";
import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return(
        <div>
            <form>
                <div style={{ padding: '20px' }}>
                <h1>Contact Us</h1>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{ display: 'block', margin: '10px 0' }}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ display: 'block', margin: '10px 0' }}
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    style={{ display: 'block', margin: '10px 0' }}
                />
                <button type="submit">Send Message</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;