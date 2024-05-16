import React from 'react'
import OfferBarTop from '../Components/OfferBarTop'
import Header from '../Components/Header'
import PanierProduct from '../Components/PanierProduct'

function Panierpage() {
  return (
    <div>
      <OfferBarTop />
      <Header />
      <div className='flex justify-between mx-56 mt-20'>
        <h1 className='text-4xl bold'>Votre panier</h1>
        <p className='underline text-gray-500 '>Continuer les achats</p>
      </div>
      <div className='mx-56 mt-8 grid grid-cols-4 text-gray-400 text-sm'>
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
      <div className='flex flex-col mx-56 mt-12 float-right'>
        <div className='flex flex-row gap-4 justify-end'>
          <div>Total estimé</div>
          <div>89.000 DT</div>
        </div>
        <div>
          <button className=' mt-8 w-96 h-12 border border-black hover:scale-102 bg-black text-white hover:shadow-md'>
            Proceder au paiment
          </button>
        </div>
      </div>
    </div>
  )
}

export default Panierpage
