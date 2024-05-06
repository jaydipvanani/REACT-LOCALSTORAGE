// src/components/MobileForm.js
import React, { useState } from 'react';

const MobileForm = ({ onSubmit, initialValues }) => {
    const [formData, setFormData] = useState(initialValues || {});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({});
    };

    return (
        <div class="card m-auto" style={{width: "25rem"}}>
            <div class="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="brand" className="form-label">Brand</label>
                        <input type="text" className="form-control" id="brand" name="brand" value={formData.brand || ''} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="model" className="form-label">Model</label>
                        <input type="text" className="form-control" id="model" name="model" value={formData.model || ''} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input type="number" className="form-control" id="price" name="price" value={formData.price || ''} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="btn btn-primary" >{initialValues ? 'Update' : 'Add'}</button>
                </form>
            </div>
        </div>
    );
};

export default MobileForm;
