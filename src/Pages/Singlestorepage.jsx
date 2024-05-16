import React from 'react'
import Header from '../Components/Header'
import Productcard from '../Components/Productcard'

function Singlestorepage() {
  return (
    <div>
      <Header />
      <div className='px-60 pt-8 '>
        <h1 className='text-4xl text-gray-700 font-serif font-semibold'>
          Store Name
        </h1>
        <h1 className='text-4xl mt-12 text-gray-900 font-light'>Produits</h1>

        <div className='grid grid-cols-4 gap-4'>
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
        </div>
      </div>
    </div>
  )
}
export default Singlestorepage
