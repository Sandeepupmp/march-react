// App.js
import React, { useState } from 'react';
import './App.css';
import DataTable from './DataTable';
import AddDataForm from './AddDataForm';

const mockData = [
  { id: 1, name: 'John Doe', class: 'A', address: '123 Main St' },
  { id: 2, name: 'Jane Smith', class: 'B', address: '456 Elm St' },
  // Add more mock data here
];

function App() {
  const [data, setData] = useState(mockData);

  const handleAddData = newData => {
    setData([...data, { id: data.length + 1, ...newData }]);
  };

  return (
    <div className="App">
      <h1>Data Management Software</h1>
      <AddDataForm onAddData={handleAddData} />
      <DataTable data={data} />
    </div>
  );
}

export default App;
