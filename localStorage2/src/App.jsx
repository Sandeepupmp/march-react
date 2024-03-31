// src/App.js
import React, { useState } from 'react';
import Form from './components/Form';
import DataDisplay from './components/DataDisplay';

const App = () => {
  const [formData, setFormData] = useState(null);

  const handleSubmit = (data) => {
    setFormData(data);
    localStorage.setItem('formData', JSON.stringify(data));
  };

  return (
    <div>
      <h1>React Form</h1>
      <Form onSubmit={handleSubmit} />
      {formData && <DataDisplay data={formData} />}
    </div>
  );
};

export default App;
