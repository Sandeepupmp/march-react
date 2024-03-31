// DataTable.js
import React, { useState } from 'react';

const DataTable = ({ data }) => {
    const [sortColumn, setSortColumn] = useState(null);
    const [filterText, setFilterText] = useState('');

    const filteredData = data.filter(item =>
        Object.values(item).some(value =>
            value.toString().toLowerCase().includes(filterText.toLowerCase())
        )
    );

    const handleSort = column => {
        if (sortColumn === column) {
            // Reverse the order if already sorted by the same column
            setSortColumn(null);
            filteredData.reverse();
        } else {
            setSortColumn(column);
            filteredData.sort((a, b) => a[column].localeCompare(b[column]));
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={filterText}
                onChange={e => setFilterText(e.target.value)}
            />
            <table>
                <thead>
                    <tr>
                        <th onClick={() => handleSort('name')}>Name</th>
                        <th onClick={() => handleSort('class')}>Class</th>
                        <th onClick={() => handleSort('address')}>Address</th>
                        {/* Add more columns here */}
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(row => (
                        <tr key={row.id}>
                            <td>{row.name}</td>
                            <td>{row.class}</td>
                            <td>{row.address}</td>
                            {/* Render more columns here */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
