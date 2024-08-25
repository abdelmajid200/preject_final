import React from 'react'
import './About.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import logo from '../Assets/logo.png'
const About = () => {
  return (
    <>
      <Navbar/>
      <div className="about-container">
        <h2>About Us</h2>
        <h2><img src={logo} alt="" /></h2>
        <p>
          Welcome to Armel, where fashion meets quality and style. We are a dedicated clothing store that
          offers a wide range of stylish, comfortable, and affordable apparel for every occasion. Our mission is to
          provide our customers with the latest trends in fashion while ensuring the best shopping experience.
        </p>
        <p>
          At Armel, we believe that fashion is a form of self-expression. Our collections are carefully
          curated to cater to all tastes and preferences, whether you're looking for casual wear, formal attire, or
          something unique to make a statement.
        </p>
        <p>
          We are committed to sustainability and ethical fashion. All of our products are sourced from suppliers who
          share our values of respect for the environment and fair labor practices. We strive to make a positive impact
          on the world, one piece of clothing at a time.
        </p>
        <p>
          Thank you for choosing Armel. We look forward to helping you find your perfect outfit!
        </p>
      </div>
        <Footer/>
    </>
  )
}

export default About