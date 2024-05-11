import React from 'react'
import boutique from '../Assets/boutique.jpg'
import arrow from '../Assets/next.png'

function Storecard() {
  return (
    <div>
      <div class='w-60 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 mt-8'>
        <a href='#' className=''>
          <img className='h-60 ' src={boutique} alt='' />
        </a>
        <div className='p-6 h-20 bg-gray-200'>
          <a href='#' className='flex items-center'>
            <h1 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-normal'>
              Store Name
            </h1>
            <img src={arrow} className='w-4 ml-2' />
          </a>
        </div>
      </div>
    </div>
  )
}
export default Storecard
