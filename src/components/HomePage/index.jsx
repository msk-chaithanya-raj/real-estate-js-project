// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header'
import './index.css';

const HomePage = () => {
  return (
    <>
      <Header />
       <div className="container">
        <h1>Welcome to Real Estate Portal</h1>
        <Link to="/property-form">
          <button className="button">List Your Property</button>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
