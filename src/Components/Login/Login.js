import React from 'react';
import './Login.modules.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        
           
            <div className='login-page'>
            <h1>Login</h1>
            <form>
                <div className='login-box'>
                    <input type="email" required></input>
                    <label>UserEmail</label>
                </div>
                <div className='login-box'>
                    <input type="password" required></input>
                    <label>UserPassword</label>
                </div>
                <div className='links'><Link id='forgot-password' to="/#">Forgot password?</Link>
                <Link id='register' to="/register">Register</Link></div><br/>
                <button>Login</button>
            </form>           
        </div>
     
    );
};

export default Login;