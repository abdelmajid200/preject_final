import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import facebook_icon from '../Assets/facebook_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'



const Footer = () => {
  return (
    <div className='footer'>
<div className="footer-logo">
    <img src={logo} alt="" />
    <p>Armel</p>
</div>
<ul className="footer-links">
    <Link to='/' style={{textDecoration:'none' }}> <li>Shop</li></Link>
    
    <Link to='/login' style={{textDecoration:'none' }}><li>Sign in</li> </Link>
    
    <Link to='/about' style={{textDecoration:'none' }}><li>About</li> </Link>
    
    <Link to='/contact' style={{textDecoration:'none' }}><li>Contact</li> </Link>
    
</ul>

   <div className="footer-social-icon">
    <div className="footer-icons-container">
       <Link to='http://instagram.com' style={{textDecoration:'none' }}> <img className='Footer-icon' src={instagram_icon} alt="" /> </Link>
    </div>
    <div className="footer-icons-container">
        <Link to='http://facebook.com' style={{textDecoration:'none' }}><img className='Footer-icon' src={facebook_icon} alt="" /> </Link>
    </div>
    <div className="footer-icons-container">
        <Link to='http://whatsapp.com' style={{textDecoration:'none' }}> <img className='Footer-icon' src={whatsapp_icon} alt="" /></Link>
    </div>
   </div>

   <div className="footer-copyright">
    <hr/>
    <p>Armel Copyright @ 2024 - All Right Reserved.</p>
   </div>
    </div>
  )
}

export default Footer