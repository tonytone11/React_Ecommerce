import React from 'react';
import '../styling/NavBar.css';

const NavBar = () => {
    return (
        <nav className="nav-container">
            <a href="/Product Files/product.html">Browse</a>
            <a className="active" href="../index.html">Home</a>
            <a href="/Contact Files/contact.html">Contact</a>
        </nav>
    );
};

export default NavBar;