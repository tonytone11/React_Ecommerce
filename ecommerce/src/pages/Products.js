import React, { useEffect, useState } from 'react';
import '../styling/Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/Product Files/mainImages.json')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error loading JSON data:", error));
    }, []);

    return (
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
    );
};

export default Products;