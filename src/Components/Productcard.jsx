import React from 'react'
import product from '../Assets/product.jpg'
import { useNavigate } from 'react-router-dom'

function Productcard() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/singleproduct')
  }
  return (
    <div className='w-60 hover:cursor-pointer ' onClick={handleClick}>
      <div className='w-60 h-[40vh] mt-8'>
        <img
          alt='product'
          src={product}
          className='object-cover w-full h-full transition-transform duration-500 ease-in-out hover:shadow-lg hover:scale-105 hover:rotate-1'
        />
      </div>
      <p className='mt-2 text-gray-800 uppercase'>phone case</p>
      <div className='flex'>
        <p className='mt-2 text-gray-700'>93.000</p>
        <p className='mt-2 ml-4 text-gray-700 uppercase'>dt</p>
      </div>
    </div>
  )
}
export default Productcard
