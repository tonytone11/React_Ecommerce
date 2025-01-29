import React, { useEffect, useState } from 'react';
import '../styling/Products.css';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('default');

    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch('/api/products');
            const data = await response.json();
            setProducts(data);
            setFilteredProducts(data);
        }

        fetchProducts();
    }, []);

    // Filter and sort products
    useEffect(() => {
        let result = [...products];

        // Apply category filter
        if (selectedCategory !== 'all') {
            result = result.filter(item => item.category === selectedCategory);
        }

        // Apply sorting
        switch (sortBy) {
            case 'price-low':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'name-asc':
                result.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                result.sort((a, b) => b.name.localeCompare(a.name));
                break;
            default:
                break;
        }

        setFilteredProducts(result);
    }, [products, selectedCategory, sortBy]);

    // Get unique categories from products
    const categories = ['all', ...new Set(products.map(item => item.category))];

    return (
        <>
            <Header />
            <NavBar />
            <section className="main-container">
                <div className="filters-container">
                    <div className="filter-group">
                        <label htmlFor="category-filter">Filter by Category:</label>
                        <select
                            id="category-filter"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="filter-select"
                        >
                            {categories.map(category => (
                                <option key={category} value={category}>
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="filter-group">
                        <label htmlFor="sort-by">Sort by:</label>
                        <select
                            id="sort-by"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="filter-select"
                        >
                            <option value="default">Default</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="name-asc">Name: A to Z</option>
                            <option value="name-desc">Name: Z to A</option>
                        </select>
                    </div>
                </div>

                <div id="products">
                    {filteredProducts.map((item, index) => (
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