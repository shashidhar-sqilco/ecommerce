import React, { useState } from 'react'
import ResponsableHeader from '../../Components/ResponsableComponents/ResponsableHeader'
import Header from '../../Components/Header'
import AddPfroductForm from '../../Components/ResponsableComponents/AddPfroductForm'

function ResponsableStore() {
  const [addShown, setShown] = useState(false)
  function togglePopUp() {
    setShown(!addShown)
  }
  return (
    <div>
      <Header />
      <div className='mx-60 mt-8'>
        <div className='grid grid-cols-6'>
          <div className='col-span-5 text-3xl'>store name</div>
          <div className=''>
            <button
              className='bg-blue-300 px-2 py-2 hover:bg-blue-400 rounded'
              onClick={togglePopUp}
            >
              Ajouter Produit
            </button>
          </div>
        </div>
        <hr className='mt-4' />
        {addShown ? <AddPfroductForm toggle={addShown} /> : null}
      </div>
    </div>
  )
}

export default ResponsableStore
