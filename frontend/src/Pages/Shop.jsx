import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import NewCollections from '../components/NewCollections/NewCollections'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const Shop = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollections/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default Shop