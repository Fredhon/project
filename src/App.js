import React from 'react';
import './App.css';
import Header from './components/header/Header.js';
import Hero from './components/hero/Hero';
import Services from './components/services/Services';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
};

export default App;
