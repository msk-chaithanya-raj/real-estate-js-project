// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import PropertyForm from './components/PropertyForm';
import PropertyPreview from './components/PropertyPreview';
import BadPath from './components/BadPath';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/property-form" element={<PropertyForm />} />
        <Route path="/property-preview" element={<PropertyPreview />} />
        <Route path="/bad-path" element={<BadPath />} />
        <Route path="*" element={<Navigate to="/bad-path" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
