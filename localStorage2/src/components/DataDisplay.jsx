// src/components/DataDisplay.js
import React from 'react';

const DataDisplay = ({ data }) => {
    return (
        <div>
            <h2>Submitted Data</h2>
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
            <p>Address:{data.address}</p>
            <p>password:{data.password}</p>
        </div>
    );
};

export default DataDisplay;
