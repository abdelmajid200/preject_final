import React from 'react'
import CartItems from '../components/CartItems/CartItems'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const Cart = () => {
  return (
   <div>
    <Navbar/>
     <CartItems/>
     <Footer/>
   </div>
  )
}

export default Cart