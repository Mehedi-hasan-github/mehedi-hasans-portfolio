import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    
  
    return (
        <div className='navbar' >
            <NavLink className='link' to="/login">Login</NavLink>
            <NavLink className='link' to="/profile">Profile</NavLink>
            <NavLink className='link' to="/services">Services</NavLink>
            <NavLink className='link' to="/about">About</NavLink>
            <NavLink className='link' to="/">Home</NavLink>
        </div>
        
    );
};

export default Header;