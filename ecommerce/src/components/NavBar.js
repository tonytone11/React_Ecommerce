import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styling/NavBar.css';

const NavBar = () => {
    return (
        <nav className="nav-container">
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    );
};

export default NavBar;