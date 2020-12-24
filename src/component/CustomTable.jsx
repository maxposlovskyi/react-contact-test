import React from 'react';

const CustomTable = ({ tableName, headers, data, renderRow }) => (
    <table className="table">
      <thead>
        <tr>
          {headers.map((row, index) => <th key={`${tableName}-header-${index}`} scope="col">{row}</th>)}
        </tr>
      </thead>
      <tbody>
      {data.map((item, index) =>  renderRow(item, index))}
      </tbody>
    </table>
);

export default CustomTable;
