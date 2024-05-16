import React from 'react'

function BoutiqueDetails() {
  return (
    <div>
      <h1 className='text-3xl font-bold'>Detail Du Boutique</h1>
      <div className='flex flex-col mt-8'>
        <div className='grid grid-cols-2 gap-8'>
          <div className='flex flex-col'>
            <label>Nom Boutique</label>
            <input
              className='border-2 mt-2 h-10 px-4'
              placeholder='Nom Boutique'
            ></input>
          </div>
        </div>
        <div className='flex flex-col mt-4'>
          <label>Email du Boutique</label>
          <input
            type='Email'
            className='border-2 mt-2 h-10 px-4'
            placeholder='votre@Email.com'
          ></input>
        </div>
        <div className='grid grid-cols-2 gap-8 mt-4'>
          <div className='flex flex-col'>
            <label>Téléphone</label>
            <input
              className='border-2 mt-2 h-10 px-4'
              placeholder='voter Telephone'
            ></input>
          </div>
        </div>
        <div className='mt-12 '>
          <button className='bg-blue-400 w-40 h-10 hover:bg-blue-500'>
            Editer Boutique
          </button>
        </div>
      </div>
    </div>
  )
}

export default BoutiqueDetails
