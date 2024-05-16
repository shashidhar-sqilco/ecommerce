import React from 'react'
import productimg from '../Assets/product.jpg'
import QuantityButtonComponent from './QuantityButtonComponent'
import trash from '../Assets/trash.png'

function PanierProduct() {
  return (
    <div className='grid grid-cols-4 mt-8'>
      <div className='col-span-2'>
        <div className='flex gap-12'>
          <div>
            <img src={productimg} className='w-28 h-36' />
          </div>
          <div>
            <h4 className='text-xl font-light'>Product Name</h4>
            <div className='flex flex-row gap-4 mt-2 text-gray-500'>
              <p>98.000</p>
              <p>DT</p>
            </div>
            <h4 className='mt-4 text-sm'>Store name</h4>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 mt-8 gap-8'>
        <div className=''>
          <QuantityButtonComponent />
        </div>
        <div>
          <img className='w-8' src={trash} />
        </div>
      </div>
      <div className='text-right mt-8'>98.000</div>
    </div>
  )
}

export default PanierProduct
