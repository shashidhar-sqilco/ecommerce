import React, { useEffect, useState } from 'react'

function Gererboutiques() {
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
      <h1 className='text-3xl font-semibold'>Gerer boutiques</h1>
      <div className='grid grid-cols-5 mt-12'>
        <div className='col-span-3'>
          <form class='flex items-center max-w-sm mx-auto'>
            <label for='simple-search' class='sr-only'>
              Search
            </label>
            <div class='relative w-full'>
              <div class='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'></div>
              <input
                type='text'
                id='simple-search'
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Search Stores...'
                required
              />
            </div>
          </form>
        </div>
        <div></div>
        <div>
          <button
            type='button'
            class=' text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
          >
            Add Store
          </button>
        </div>
      </div>
      <div class='relative overflow-x-auto mt-2'>
        <table class='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
          <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' class='px-6 py-3'>
                Nom boutique
              </th>
              <th scope='col' class='px-6 py-3'>
                Expediteur
              </th>

              <th scope='col' class='px-6 py-3'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((element, i) => (
              <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                <th
                  scope='row'
                  class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                >
                  {element.name}
                </th>
                <td class='px-6 py-4'>{element.lastName}</td>
                <td class='px-6 py-4'>{element.role}</td>
                <td class='px-6 py-4 '>
                  <p
                    className='text-blue-500 underline hover:cursor-pointer'
                    onClick={() => handleClick(element)}
                  >
                    Edit
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Gererboutiques
