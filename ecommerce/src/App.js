import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <NavBar />
      <main>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/contact" component={Contact} />
        </Routes>
        <Home />
      </main>
      <Footer />
    </Router>
  );
};

export default App;