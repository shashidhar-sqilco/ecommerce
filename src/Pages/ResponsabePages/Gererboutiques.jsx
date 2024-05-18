import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Gererboutiques() {
  const [data, setData] = useState([])
  const [oldData, setOldData] = useState([])
  const [addstore, setAddstore] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    telephone: '',
    password: '123456',
    boutiqueId: '',
  })
  const [boutiqueId, setBoutiqueId] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'http://localhost:3000/Responsable/addResponsable',
        formData,
      )

      console.log('produit ajouté avec succes:', response.data)
      setAddstore(true)
    } catch (error) {
      console.error('produit non ajouté', error)
    }
  }

  useEffect(() => {
    async function fetchStores() {
      try {
        const response = await axios.get(
          `http://localhost:3000/Boutique/getBoutique`,
        )
        console.log('res', response.data)
        setData(response.data)
        setOldData(response.data)
      } catch (error) {
        console.error('Error fetching stores:', error)
      }
    }
    fetchStores()
  }, [addstore])
  ////////////////////////////////////////////////////

  //////////////////////////////////
  const handleInput = (event) => {
    let input = event.target.value.replace(/\s+/g, ' ').trim()
    setSearchQuery(input)

    const filteredArticles = oldData.filter((e) =>
      e.name.toLowerCase().includes(input.toLowerCase()),
    )

    console.log(input)

    setData(filteredArticles)
    if (input == '') {
      console.log(oldData)
      setData(oldData)
    }
  }

  /////////////////////////////////////////////////

  function handlescreenchange(id) {
    setAddstore(!addstore)
    setFormData({ ...formData, [boutiqueId]: id })
  }

  console.log(addstore)

  return (
    <div>
      {addstore ? (
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
                    onChange={handleInput}
                  />
                </div>
              </form>
            </div>
            <div></div>
            <div></div>
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
                        onClick={handlescreenchange(element._id)}
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
      ) : (
        <div className=''>
          <div className=' bg-white'>
            <h1 className='text-2xl font-bold mb-8'>Ajouter un Responsable</h1>
            <form id='form'>
              <div className='relative z-0 w-40 mb-5'>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder=' '
                  required
                  className='pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200'
                />
                <label
                  for='name'
                  className='absolute duration-300 top-3 -z-1 origin-0 text-gray-500'
                >
                  Nom du Responsable
                </label>
                <span className='text-sm text-red-600 hidden' id='error'>
                  Name is required
                </span>
              </div>

              <div className='grid grid-cols-2 gap-8'>
                <div className='relative z-0 w-full mb-5'>
                  <input
                    type='text'
                    placeholder=' '
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className='pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200'
                  />
                  <label className='absolute duration-300 top-3 -z-1 origin-0 text-gray-500'>
                    Prenom
                  </label>
                  <span className='text-sm text-red-600 hidden' id='error'>
                    Prenom is required
                  </span>
                </div>
                <div className='relative z-0 w-full mb-5'>
                  <input
                    type='email'
                    placeholder=' '
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    className='pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200'
                  />
                  <label
                    for='password'
                    className='absolute duration-300 top-3 -z-1 origin-0 text-gray-500'
                  >
                    Email
                  </label>
                  <span className='text-sm text-red-600 hidden' id='error'>
                    Email is required
                  </span>
                </div>
              </div>

              <p
                class='mt-1 text-sm text-gray-500 dark:text-gray-300'
                id='file_input_help'
              ></p>

              <div>
                <button
                  type='button'
                  onClick={() => setAddstore(!addstore)}
                  class='mt-12 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
                >
                  Retour
                </button>
                <button
                  type='button'
                  onClick={handleSubmit}
                  class='mt-12 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
                >
                  Ajouter
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gererboutiques
