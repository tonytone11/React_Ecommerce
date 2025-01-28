import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <NavBar />
      {/* Main content of your application can go here */}
      <main>
        <Home />
        {/* Add more content or components here */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
