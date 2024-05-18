import React from 'react'
import boutique from '../Assets/boutique.jpg'
import arrow from '../Assets/next.png'
import { useNavigate } from 'react-router-dom'

function Storecard({ store }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/store')
  }

  return (
    <div onClick={handleClick}>
      <div class='w-60 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 mt-8'>
        <a href='' className=''>
          <img className='h-60 ' src={boutique} alt='' />
        </a>

        <div className='h-20 p-6 bg-gray-200'>
          <a href='singleproduct' className='flex items-center'>
            <h1 className='mb-2 text-2xl font-normal font-bold tracking-tight text-gray-900 dark:text-white'>
              {/* {store.name} */}
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
