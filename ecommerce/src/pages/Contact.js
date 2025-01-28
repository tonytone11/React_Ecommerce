import React from 'react';
import '../styling/Contact.css';

const Contact = () => {
    return (
        <main>
            <h1>Contact Us</h1>
            <form id="contact" action="mailto:your_email@example.com" method="post" enctype="text/plain">
                <label htmlFor="name">Name:</label>
                <input className="name-container" type="text" id="name" name="name" minLength="2" maxLength="50" required />

                <label htmlFor="email">Email:</label>
                <input className="email-container" type="email" id="email" name="email" required />

                <label htmlFor="department">What Do You Need Help With?</label>
                <select className="department" name="department" required>
                    <option value="" disabled selected>Select the Department</option>
                    <option value="console">Consoles</option>
                    <option value="controller">Controllers</option>
                    <option value="headset">Headset</option>
                    <option value="pc-accessories">PC Accessories</option>
                </select>

                <label htmlFor="comments">Comments:</label>
                <textarea id="comments" name="comments"></textarea>

                <input className="submit-button" type="submit" value="Send" />
            </form>
        </main>
    );
};

export default Contact;