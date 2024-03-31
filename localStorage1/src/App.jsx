import React from 'react';
import useLocalStorage from './useLocalStorage';

const App = () => {
  const [data, setData] = useLocalStorage('myData', { name: '', age: 0 });

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={handleChange}
        placeholder="Enter name"
      />
      <input
        type="number"
        name="age"
        value={data.age}
        onChange={handleChange}
        placeholder="Enter age"
      />
      <div>
        <strong>Name:</strong> {data.name}, <strong>Age:</strong> {data.age}
      </div>
    </div>
  );
};

export default App;
