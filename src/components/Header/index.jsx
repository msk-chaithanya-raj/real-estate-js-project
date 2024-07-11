// src/components/Header/index.js
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/property-form">Property Form</Link></li>
          <li><Link to="/property-form">Property Preview</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
