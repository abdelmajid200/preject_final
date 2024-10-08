import React from 'react'
import './Contact.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Contact = () => {
  return (
    <>
    
      <Navbar/>
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
      <Footer/>
    </>
  )
}

export default Contact