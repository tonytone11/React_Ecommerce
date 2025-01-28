import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/NavBar.css';

const NavBar = () => {
    return (
        <nav className="nav-container">
            <Link to="/products">Browse</Link>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default NavBar;