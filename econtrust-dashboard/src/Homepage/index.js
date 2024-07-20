import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png'
import './index.css'

function Homepage() {
    return (
        <div className='homepage'>
            <div className='title'>
                <h1>EconTrust</h1>
            </div>

            <div className='econtext'>
                <h3>"Quality Matters, Choose EconTrust!"</h3>
            </div>

            <div className='econlogo'>
                <img className='econlogo' src={logo} alt='logo'/> {/* Assuming logo is defined somewhere */}
            </div>

            <div className='button'>
                <Link to="/signup">
                    <button className="accountbutton">Create account</button>
                </Link>
                { }
                { <Link to="/path-to-login-page">
                    <button className="loginbutton">Login</button>
                </Link> }
            </div>
        </div>
    )
}

export default Homepage;
