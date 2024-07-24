import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './index.css';
// import { PiPiggyBank } from "react-icons/pi";
// import { CgInsights } from "react-icons/cg";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MyBarChart = () => {

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
    
        label: 'Akiba Group',
        data: [300, 450, 700, 500, 650, 800, 700, 400, 850, 760, 900, 560],
        backgroundColor: (context) => {
          const index = context.dataIndex;
          if (index === 6) {
            return '#6FFC2D';
          } else {
            return 'wheat';
          }
        },
      },
    ],
  };

  const data2 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Akiba Repayment Rate',
        data: [200, 350, 600, 400, 550, 750, 650, 300, 800, 740, 890, 540],
        backgroundColor: (context) => {
          const index = context.dataIndex;
          if (index === 5) {
            return '#6FFC2D';
          } else {
            return 'lightblue';
          }
        },
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
    <div className='page'>
      <div className='nav'>
        <div>
        </div>
      </div>
    <div id='bar2'>
      <div id='bar'>
        <h1 className='header'>Total Insights</h1>
        <h3>Akiba Savings</h3>
      <Bar data={data} options={options} />
      </div>
      <div id='bar'>
        <h3>Akiba Repayment Rate</h3>
      <Bar data={data2} options={options} />
      </div>
    </div>
    </div>
  );
};

export default MyBarChart;
