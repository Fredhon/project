import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">NIZHNIY SHIELD</h1>
        <nav className="nav">
          <a href="#" className="nav-link">Услуги</a>
          <a href="#" className="nav-link">О компании</a>
          <a href="#" className="nav-link">Контакты</a>
        </nav>
        <button className="mobile-menu-btn">☰</button>
      </div>
    </header>
  );
};
export default Header;
