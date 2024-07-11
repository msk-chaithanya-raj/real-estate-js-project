// src/components/PropertyForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import Header from '../Header'

const PropertyForm = () => {
  const [formData, setFormData] = useState({
    propertyFor: '',
    propertyType: '',
    builtUpArea: '',
    carpetArea: '',
    tenantPreference: '',
    availability: '',
    address: '',
    monthlyRent: '',
    securityDeposit: '',
    maintenanceCharges: '',
    photos: null
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/property-preview', { state: { formData } });
  };

  return (
    <>
      <Header />
      <div className="container">
        <h2>List Your Property</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Property For</label>
            <input
              type="text"
              name="propertyFor"
              value={formData.propertyFor}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Property Type</label>
            <input
              type="text"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="button">Preview Property</button>
        </form>
      </div>
    </>
  );
};

export default PropertyForm;
