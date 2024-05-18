import React, { useState } from 'react';
import Header from '../Components/Header';
import product from '../Assets/product.jpg';
import Productcard from '../Components/Productcard';
import OfferBarTop from '../Components/OfferBarTop';
import QuantityButtonComponent from '../Components/QuantityButtonComponent';

function Singleproductpage() {
  let [quantity, setQuantity] = useState(0);

  function increment() {
    setQuantity(quantity + 1);
  }

  function decrement() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className='relative'>
      <div className='flex pt-8 px-60'>
        <div className='w-96 h-[60vh] mt-8 ml-16'>
          <img src={product} className='object-cover w-full h-full' alt='Product' />
        </div>
        <div className='ml-16'>
          <h1 className='text-2xl font-bold'>Product Name</h1>
          <p className='mt-4 text-gray-600'>
            Product description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className='mt-4 text-gray-600'>Quantité</p>
          <QuantityButtonComponent increment={increment} decrement={decrement} quantity={quantity} />
          <a href='/panier'><button className='h-12 mt-4 text-white bg-black border border-black w-96 hover:scale-102 hover:shadow-md'>
            Ajouter au panier
          </button></a>

          <a href='/store'><button className='h-12 mt-4 border border-black w-96 hover:border-2'>
            Go back
          </button></a> 
        </div>
      </div>
      <div className='mx-56 mt-8'>
        <h4 className='text-3xl text-gray-700'>Similar products</h4>
        <div className='grid items-center grid-cols-4 gap-2 mt-8 justify-items-center'>
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
        </div>
      </div>
    </div>
  );
}

export default Singleproductpage;
