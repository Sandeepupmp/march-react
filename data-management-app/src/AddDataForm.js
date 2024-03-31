// AddDataForm.js
import React, { useState } from 'react';

const AddDataForm = ({ onAddData }) => {
    const [formData, setFormData] = useState({ name: '', class: '', address: '' });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        onAddData(formData);
        setFormData({ name: '', class: '', address: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
            <input type="text" name="class" placeholder="Class" value={formData.class} onChange={handleChange} />
            <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
            {/* Add more input fields for additional columns */}
            <button type="submit">Add</button>
        </form>
    );
};

export default AddDataForm;
