import React, { useState } from 'react';
import '../styling/Contact.css';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        department: '',
        comments: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        let formErrors = {};
        if (!formData.name) formErrors.name = 'Name is required';
        if (!formData.email) {
            formErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = 'Email address is invalid';
        }
        if (!formData.department) formErrors.department = 'Department is required';
        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();
        if (Object.keys(formErrors).length === 0) {
            // Form is valid, submit the form
            console.log('Form submitted:', formData);
            // You can add your form submission logic here
        } else {
            setErrors(formErrors);
        }
    };
    return (
        <>
            <Header />
            <NavBar />
            <main>
                <h1>Contact Us</h1>
                <form id="contact" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        className="name-container"
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    {errors.name && <p className="error">{errors.name}</p>}

                    <label htmlFor="email">Email:</label>
                    <input
                        className="email-container"
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <p className="error">{errors.email}</p>}

                    <label htmlFor="department">What Do You Need Help With?</label>
                    <select
                        className="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select the Department</option>
                        <option value="console">Consoles</option>
                        <option value="controller">Controllers</option>
                        <option value="headset">Headset</option>
                        <option value="pc-accessories">PC Accessories</option>
                    </select>
                    {errors.department && <p className="error">{errors.department}</p>}

                    <label htmlFor="comments">Comments:</label>
                    <textarea
                        id="comments"
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}
                    ></textarea>

                    <input className="submit-button" type="submit" value="Send" />
                </form>
            </main>
            <Footer />
        </>

    );
};

export default Contact;