import React from 'react'
import Header from '../Components/Header'

function Paimentpage() {
  return (
    <div>
      <Header />
      <div className='flex justify-center mx-56 mt-4 justify-between'>
        <div className='mt-4'>
          <div className=' text-xl font-semibold'>Contact</div>
          <input
            type='text'
            placeholder='Email ou numero de portable'
            className='mt-2 border border-2 rounded border-gray-500 h-12 w-[62vh] p-4'
          ></input>
          <div className=' text-xl font-semibold mt-4'>Livraison</div>
          <input
            type='text'
            placeholder='Pays/Region'
            className='mt-2 border border-2 rounded border-gray-500 h-12 w-[62vh] p-4'
            value='Tunisie'
          ></input>
          <div className='grid grid-cols-2 gap-4 mt-4'>
            <div>
              <input
                type='text'
                placeholder='Prenom'
                className='mt-2 border border-2 rounded border-gray-500 h-12 w-[30vh] p-4'
              ></input>
            </div>
            <div>
              <input
                type='text'
                placeholder='Nom'
                className='mt-2 border border-2 rounded border-gray-500 h-12 w-[30vh] p-4'
              ></input>
            </div>
          </div>
          <div className='flex flex-col'>
            <input
              type='text'
              placeholder='Adresse'
              className='mt-2 border border-2 rounded border-gray-500 h-12 w-[62vh] p-4'
            ></input>
            <div className='grid grid-cols-2 mt-4 gap-4'>
              <input
                type='text'
                placeholder='Code postal'
                className='mt-2 border border-2 rounded border-gray-500 h-12 w-[30vh] p-4'
              ></input>
              <input
                type='text'
                placeholder='Ville'
                className='mt-2 border border-2 rounded border-gray-500 h-12 w-[30vh] p-4'
              ></input>
            </div>
            <input
              type='text'
              placeholder='Telephone'
              className='mt-4 border border-2 rounded border-gray-500 h-12 w-[62vh] p-4'
            ></input>

            <button className='mt-4 border border-2 rounded-md  h-16 w-[62vh] p-4 bg-indigo-600 hover:bg-indigo-700 text-xl  font-semibold text-white'>
              Valider le paiment
            </button>
          </div>
        </div>

        <div>bbaaaaaaaaaab</div>
      </div>
    </div>
  )
}

export default Paimentpage
