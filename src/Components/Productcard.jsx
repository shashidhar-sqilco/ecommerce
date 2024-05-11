import React from 'react'
import product from '../Assets/product.jpg'

function Productcard() {
  return (
    <div className='w-60 hover:cursor-pointer '>
      <div className='w-60 h-[40vh] mt-8'>
        <img
          src={product}
          className='w-full h-full object-cover hover:shadow-lg hover:scale-105 transition-transform duration-500 hover:rotate-1 ease-in-out'
        />
      </div>
      <p className='text-gray-800 mt-2 uppercase'>phone case</p>
      <div className='flex'>
        <p className='text-gray-700 mt-2'>93.000</p>
        <p className='text-gray-700 mt-2 uppercase ml-4'>dt</p>
      </div>
    </div>
  )
}
export default Productcard
