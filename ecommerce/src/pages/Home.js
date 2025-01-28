import React from 'react';
import '../styling/Home.css';

const Home = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">
                    Welcome Home Gamers
                </h1>
                <button type="button" className="hero-button" onClick={() => window.location.href = '/browse'}>
                    SHOP HERE
                </button>
                <h2 className="hero-subtitle">
                    Level up your gaming experience with top-tier consoles, handhelds, and accessories--all in one place.
                </h2>
            </div>
        </section>
    );
};

export default Home;