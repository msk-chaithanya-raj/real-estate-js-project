// src/components/PropertyPreview.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './index.css';
import Header from '../Header'

const PropertyPreview = () => {
  const location = useLocation();
  const { formData } = location.state;

  return (
    <>
      <Header />
      <div className="container">
        <h2>Property Preview</h2>
        <div className="preview-group">
          <strong>Property For:</strong> {formData.propertyFor}
        </div>
        <div className="preview-group">
          <strong>Property Type:</strong> {formData.propertyType}
        </div>
        <div className="preview-group">
          <strong>Address:</strong> {formData.address}
        </div>
        {/* Continue displaying all fields */}
      </div>
    </>
  );
};

export default PropertyPreview;
