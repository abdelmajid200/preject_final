import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import navlogo from '../assets/nav-logo.svg';
import navProfile from '../assets/nav-profile.svg';
import logo from '../assets/logo.png';
const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('auth-token');  
    localStorage.removeItem('user');  
    navigate('/admin');  
  };

  return (
    <div className='navbar'>
      <img className='nav-logo1' src={logo} alt="Logo" />
      <img className='nav-logo' src={navlogo} alt="Logo" />
      <div className='nav-actions'>
        <img src={navProfile} alt="Profile" className='nav-profile' />
        <button className='logout-button' onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
