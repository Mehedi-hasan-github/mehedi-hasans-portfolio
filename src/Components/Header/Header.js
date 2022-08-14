import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css'
const Header = () => {
  
  
  return (
      
    <div className="navbar">
      <navbar className="nav">
      <label className='icon' for="icon">Mehedi Hasan</label>
      <input type="checkbox" id='check'></input>
      <label for="check" className='checkbtn'><img width="35px" src='https://icons.veryicon.com/png/o/clothes-accessories/through-item/menu-29.png' alt='menu'></img></label>
      <ul>
        <li ><NavLink to="/">Home</NavLink></li>
        <li ><NavLink to="about">About</NavLink></li>
        <li ><NavLink to="services">Services</NavLink></li>
        <li ><NavLink to="profile">Profile</NavLink></li>
        <li ><NavLink to="login">Login</NavLink></li>        
      </ul>
      </navbar>
    </div>
  );
};

export default Header;