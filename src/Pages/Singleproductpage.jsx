import React from 'react'
import Header from '../Components/Header'
import product from '../Assets/product.jpg'
import { useState } from 'react'
import Productcard from '../Components/Productcard'
import OfferBarTop from '../Components/OfferBarTop'
import QuantityButtonComponent from '../Components/QuantityButtonComponent'

function Singleproductpage() {
  let [quantity, setQuantity] = useState(0)

  function increment() {
    setQuantity((quantity += 1))
  }

  function decrement() {
    if (quantity > 0) {
      setQuantity((quantity -= 1))
    }
  }

  return (
    <div className='relative'>
      <OfferBarTop />
      <Header />
      <div className='px-60 pt-8 flex'>
        <div className='w-96 h-[60vh] mt-8 ml-16'>
          <img src={product} className='w-full h-full object-cover' />
        </div>
        <div className='mt-8 ml-32 w-96'>
          <p className='uppercase font-thin text-xs'>store name</p>
          <h1 className='font-medium text-3xl oldstyle-nums mt-2'>
            product name and category
          </h1>
          <div className='flex'>
            <p className='mt-4 text-gray-600'>90.000</p>
            <p className='mt-4 ml-2 uppercase text-gray-600'>DT</p>
          </div>
          <p className='text-xs uppercase text-gray-600 font-thin'>
            Taxes incluses.
          </p>
          <p className='mt-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p className='mt-4 text-gray-600'>Quantité</p>
          <QuantityButtonComponent />

          <button className=' mt-4 w-96 h-12 border border-black hover:border-2'>
            Ajouter au panier
          </button>
          <button className='mt-4 w-96 h-12 border border-black hover:scale-102 bg-black text-white hover:shadow-md'>
            Acheter maintenant
          </button>
        </div>
      </div>
      <div className='mt-8 mx-56'>
        <h4 className='text-3xl text-gray-700'>Similar products</h4>
        <div className='grid grid-cols-4 gap-2 mt-8 justify-items-center items-center'>
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
        </div>
      </div>
    </div>
  )
}
export default Singleproductpage
