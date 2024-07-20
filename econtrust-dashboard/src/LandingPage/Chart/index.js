import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './index.css'; 
const Dashboard = () => {
  const data = {
    labels: ['0', '1', '7', '14', '21', '28'],
    datasets: [
      {
        label: 'Current Month',
        data: [500, 1500, 2000, 3500, 4000, 4500],
        borderColor: '',
        fill: false,
      },
      {
        label: 'Past Month',
        data: [0, 500, 1000, 1500, 2000, 2500],
        borderColor: '',
        fill: false,
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div className="dashboard">
      <div className="stats">
        <div className="stat">
         
          <div className="number">43202</div><br/>
          <div className="label">Loans</div>
        </div>
        <div className="stat">
         
          <div className="number">34900</div><br/>
          <div className="label">Members</div>
        </div>
        <div className="stat">
     
          <div className="number">2986</div><br/>
          <div className="label">Clients</div>
        </div>
        <div className="stat">
         
          <div className="number">23569</div><br/>
          <div className="label">Revenue</div>
        </div>
      </div>
      <div className="chart-container">
        <h2>Number of Users</h2>
        <Line data={data} options={options} />
      </div>
      <div className="metrics">
        <div className="metric">
          <span ><b>Visits:</b></span>
          <span>96,930 Users (40%)</span>
        </div>
        <div className="metric">
          <span><b>Bounce Rate:</b></span>
          <span>3,220 Users (24%)</span>
        </div>
        <div className="metric">
          <span><b>Unique Visitors:</b></span>
          <span>29,658 Users (60%)</span>
        </div>
        <div className="metric">
          <span><b>Targeted Visitors:</b></span>
          <span>99,658 Users (90%)</span>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;