import React from 'react'
import Header from '../Components/Header'
import mall from '../Assets/mall.jpg'
import OfferBarTop from '../Components/OfferBarTop'
import Register from '../Components/Register'
import Login from '../Components/Login'
import Productcard from '../Components/Productcard'

function Homepage() {
  return (
    <div>
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
      <h1 className='mt-12 font-mono text-6xl font-semibold text-center'>
        Some of our products
      </h1>
      <div className='grid grid-cols-5 px-16 mt-12'>
        <Productcard /> 
        <Productcard />
        <Productcard />
        <Productcard />
        <Productcard />
      </div>
    </div>
  )
}
export default Homepage
