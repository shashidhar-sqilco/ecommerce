import React, { useEffect, useState } from 'react'
import Storecard from '../Components/Storecard'
import Header from '../Components/Header'

function Storespage() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchStores() {
      try {
        const response = await axios.get(
          `http://localhost:3000/Boutique/getBoutique`,
        )
        console.log('res', response.data)
        setData(response.data)
      } catch (error) {
        console.error('Error fetching stores:', error)
      }
    }
    fetchStores()
  }, [])
  return (
    <div>
      <Header />
      <div className='px-60 pt-8 '>
        <h1 className='text-4xl'>Boutiques</h1>
        <div className='grid grid-cols-4 gap-4'>
          <Storecard />
          <Storecard />
          <Storecard />
          <Storecard />
          <Storecard />
          <Storecard />
          <Storecard />
          <Storecard />
        </div>
      </div>
    </div>
  )
}
export default Storespage
