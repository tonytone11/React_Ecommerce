import React from 'react';
import '../styling/Footer.css';


const Footer = () => {
    return (
        <footer className="footer-container">
            <p>Copyright &copy; 2024 Created by Anthony</p>
            <section className="footer-nav">
                <a href="../index.html">Home</a>
                <a href="/Product Files/product.html">Browse</a>
                <a href="/Contact Files/contact.html">Contact</a>
            </section>
            <section className="social-media-links">
                <a href="https://www.instagram.com/anth.ony__/" className="fa fa-instagram" target="_blank" rel="noopener noreferrer"></a>
                <a href="https://www.linkedin.com/in/anthony-montesdeoca-7b4b6532b/" className="fa fa-linkedin" target="_blank" rel="noopener noreferrer"></a>
                <a href="mailto:anthony_chen97@yahoo.com" className="fa fa-yahoo"></a>
            </section>
        </footer>
    );
};

export default Footer;