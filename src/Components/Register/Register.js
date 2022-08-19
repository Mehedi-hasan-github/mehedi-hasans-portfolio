import React from 'react';
import './Register.modules.css'
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <div className='register-page'>
            <h1>Please Register</h1>
            <div className='register-box'>
                <input type="FullName" required></input>
                <label>Full Name</label>
            </div>
            <div className='register-box'>
                <input type="email" required></input>
                <label>Email</label>
            </div>
            <div className='register-box'>
                <input type="password" required></input>
                <label>Password</label>
            </div>
            <div className='register-box'>
                <input type="password" required></input>
                <label>Confirm Password</label>
            </div>
            <span ><Link id='login' to="/login">Login</Link></span><br/>
            <button>Register</button>
        </div>
    );
};

export default Register;