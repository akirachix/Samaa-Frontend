import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
const data = [
  { name: 'VijanBidii', tech: ['fab fa-apple', 'fab fa-windows'], date: '12-Jan-2021', progress: 75.5 },
  { name: 'SokoTea', tech: ['fab fa-apple', 'fab fa-windows'], date: '21-Feb-2021', progress: 35.4 },
  { name: 'TeaFarm', tech: ['fab fa-apple', 'fab fa-windows'], date: '13-Mar-2021', progress: 25 },
  { name: 'Loans', tech: ['fab fa-apple', 'fab fa-windows'], date: '24-Jan-2021', progress: 100 },
  { name: 'Saings', tech: ['fab fa-apple', 'fab fa-windows'], date: '12-Jan-2021', progress: 75.5 },
  { name: 'Wallet', tech: ['fab fa-apple', 'fab fa-windows'], date: '21-Feb-2021', progress: 35.4 },
  { name: 'Wallet', tech: ['fab fa-apple', 'fab fa-windows'], date: '13-Mar-2021', progress: 25 },
  { name: 'Loans', tech: ['fab fa-apple', 'fab fa-windows'], date: '24-Jan-2021', progress: 100 },
  { name: 'Savings', tech: ['fab fa-apple', 'fab fa-windows'], date: '12-Jan-2021', progress: 75.5 },
  { name: 'Loans', tech: ['fab fa-apple', 'fab fa-windows'], date: '21-Feb-2021', progress: 35.4 },
  { name: 'Savings', tech: ['fab fa-apple', 'fab fa-windows'], date: '13-Mar-2021', progress: 25 },
  { name: 'Loans', tech: ['fab fa-apple', 'fab fa-windows'], date: '24-Jan-2021', progress: 100 },
  { name: 'Savings', tech: ['fab fa-apple', 'fab fa-windows'], date: '12-Jan-2021', progress: 75.5 },
 
  // Add more data as needed
];
const TableRow = ({ name, tech, date, progress }) => (
  <tr>
    <td>{name}</td>
    <td>
      {tech.map((icon, index) => (
        <i key={index} className={icon} style={{ marginRight: '5px' }}></i>
      ))}
    </td>
    <td>{date}</td>
    <td>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      {progress}%
    </td>
  </tr>
);
const DataTable = () => (
  <table className="data-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Tech</th>
        <th>Date</th>
        <th>Progress</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <TableRow key={index} {...item} />
      ))}
    </tbody>
  </table>
);
export default DataTable;