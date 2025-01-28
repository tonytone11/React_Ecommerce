import React, { useEffect, useState } from 'react';
import '../styling/Products.css';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/Product Files/mainImages.json')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error loading JSON data:", error));
    }, []);

    return (
        <>
            <Header />
            <NavBar />
            <section className="main-container">
                <div id="products">
                    {products.map((item, index) => (
                        <div key={index} className="item-container">
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>{item.price}</p>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </>

    );
};

export default Products;