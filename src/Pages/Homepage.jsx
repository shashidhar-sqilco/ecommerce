import React from 'react'
import Header from '../Components/Header'
import mall from '../Assets/mall.jpg'
import OfferBarTop from '../Components/OfferBarTop'
import Register from '../Components/Register'
import Login from '../Components/Login'

function Homepage() {
  return (
    <div>
      <OfferBarTop />
      <Header />
      <div
        className='bg-cover bg-center h-[90vh] bg-blend-hard-light'
        style={{
          backgroundImage: `url(${mall}), linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))`,
        }}
      >
        <h1 className='brightness-100 text-white text-center pt-[50vh] text-6xl'>
          Browse our latest products
        </h1>
      </div>
    </div>
  )
}
export default Homepage
