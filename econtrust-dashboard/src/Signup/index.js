import React, { useState } from 'react';
import './index.css'
import growtea from '../Images/growtea.jpg'



function Signup() {

    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
    };
  
    return (

     <div className='formsheet'>

           <div className='growtea'>
                <img className='growtea' src ={growtea} alt='growtea'/>
            </div>


<div className=''>
<h2 className='signuptext'>Sign Up</h2>
 
      <form onSubmit={handleSubmit} className="signup-form">
        <div className='inputfield'>
        <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} className='input' required/>
        <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} className='input' required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange}  className='input' required/>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} className='input' required/>
        <input type="password" name="password" placeholder="Confirm Password" onChange={handleChange} className='input' required/>
        <button type="submit" className='submit'>Sign Up</button>
        </div>
      </form>
 </div>    
      
     </div>
    );
  }







export default Signup;