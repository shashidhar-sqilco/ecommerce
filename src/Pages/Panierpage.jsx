import React from 'react'
import OfferBarTop from '../Components/OfferBarTop'
import Header from '../Components/Header'
import PanierProduct from '../Components/PanierProduct'

function Panierpage() {
  return (
    <div>
      
      <div className='flex justify-between mx-56 mt-20'>
        <h1 className='text-4xl bold'>Votre panier</h1>
        <p className='text-gray-500 underline '>
          <a href='/stores'>Continuer les achats</a>
        </p>
      </div>
      <div className='grid grid-cols-4 mx-56 mt-8 text-sm text-gray-400'>
        <div>Produit</div>
        <div></div>
        <div>Quantité</div>
        <div className='text-right'>Total</div>
      </div>
      <hr className='mx-56 mt-4' />
      <div className='mx-56 mt-4 '>
        <PanierProduct />
        <PanierProduct />
        <PanierProduct />
      </div>

      <hr className='mx-56 mt-4' />
      <div className='flex flex-col float-right mx-56 mt-12'>
        <div className='flex flex-row justify-end gap-4'>
          <div>Total estimé</div>
          <div>89.000 DT</div>
        </div>
        <div>
          <button className='h-12 mt-8 text-white bg-black border border-black w-96 hover:scale-102 hover:shadow-md'>
            <a href='/paiment'> Proceder au paiment</a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Panierpage
