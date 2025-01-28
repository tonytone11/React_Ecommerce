import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../styling/NavBar.css';

const NavBar = () => {
    return (
        <>
            <nav className="nav-container">
                <Link to="/products">Products</Link>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <Outlet />
        </>
    );
};

export default NavBar;