import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmark, faPiggyBank, faChartSimple,faHome,faFile } from '@fortawesome/free-solid-svg-icons'; 

const NavigationLinks = () => {
  return (
    <nav className='sidebar'>    
    <img src="/images/logo.png" className="picture" alt="logo"/> 
      <div className='user'>
     <div><img src="/images/vivy.png" className="pictures" alt="vivy"/></div> 
     <div className=''>
      <h4>Mary Vivian</h4>
      <p>Administrator</p>
     </div>
      </div>


      <ul className='sidenav' >
      <li>
          <Link to="/LandingPage">
          < FontAwesomeIcon icon={faHome} style={{ color: '#f1f2f4' }} /> Home
          </Link>
        </li>
        <li>
          <Link to="/loans">
            <FontAwesomeIcon icon={faLandmark} style={{ color: "#f5f5f5" }} /> Loans
          </Link>
        </li>
        <li>
          <Link to="/savings">
            <FontAwesomeIcon icon={faPiggyBank} style={{ color: "#ffffff" }} /> Savings
          </Link>
        </li>
        <li>
          <Link to="/insights">
            <FontAwesomeIcon icon={faChartSimple} style={{ color: "#ffffff" }} /> Insights
          </Link>
        </li>
        <li>
          <Link to="/Reports">
            <FontAwesomeIcon icon={faFile} style={{ color: "#ffffff" }} /> Reports
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationLinks;
