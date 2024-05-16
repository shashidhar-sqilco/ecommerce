import axios from 'axios'
import React, { useEffect, useState } from 'react'

function GererUtilisateur() {
  const [data, setData] = useState([])
  const [editUi, setEdit] = useState(false)
  const [singleUser, setUser] = useState({})
  const [option, setOption] = useState(false)
  const [role, setRole] = useState('')
  const [input, setInput] = useState('')

  const handleInput = (event) => {
    let input = event.target.value.replace(/\s+/g, ' ').trim()
    setInput(input)

    const filteredArticles = data.filter((e) =>
      e.title.toLowerCase().includes(input.toLowerCase()),
    )

    setArticles(filteredArticles)
  }

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get(`http://localhost:3000/user/getUser`)
        console.log('res', response.data)
        setData(response.data)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }
    fetchUsers()
  }, [])

  const handleClick = (userInfo) => {
    setUser(userInfo)
    setEdit(true)
  }
  console.log(data)

  return (
    <div>
      {!editUi ? (
        <div>
          <h1 className='text-3xl font-semibold'>
            Gerer les roles des utilisateurs
          </h1>
          <div className='grid grid-cols-3  mt-8'>
            <div>
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
                    placeholder='Search Users...'
                    required
                  />
                </div>
              </form>
            </div>
            <div></div>
            <div></div>
          </div>

          <div class='relative overflow-x-auto mt-4'>
            <table class='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
              <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                  <th scope='col' class='px-6 py-3'>
                    Nom
                  </th>
                  <th scope='col' class='px-6 py-3'>
                    Prenom
                  </th>
                  <th scope='col' class='px-6 py-3'>
                    Role
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
      ) : (
        <div>
          <h1 className='text-3xl font-semibold'>Editer utilisateur</h1>
          <div className='flex mt-8 gap-16'>
            <div className='flex gap-4'>
              <h4 className='text-2xl font-semibold'>Nom:</h4>
              <h4 className='text-2xl text-gray-600'>{singleUser.name}</h4>
            </div>
            <div className='flex gap-4'>
              <h4 className='text-2xl font-semibold'>Prenom:</h4>
              <h4 className='text-2xl text-gray-600'>{singleUser.lastName}</h4>
            </div>
          </div>
          <div className='flex gap-4 mt-8'>
            <h4 className='text-2xl font-semibold'>Email:</h4>
            <h4 className='text-2xl text-gray-600'>{singleUser.email}</h4>
          </div>
          <div className='flex gap-4 mt-8'>
            <h4 className='text-2xl font-semibold'>Telephone:</h4>
            <h4 className='text-2xl text-gray-600'>{singleUser.telephone}</h4>
          </div>
          <div className='flex gap-4 mt-8'>
            <h4 className='text-2xl font-semibold'>Role:</h4>
            <h4 className='text-2xl text-gray-600'>{singleUser.role}</h4>
            {option && (
              <form class='max-w-sm mx-auto'>
                <select
                  onChange={(e) => setRole(e.target.value)}
                  id='countries'
                  class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                >
                  <option selected>Choisir role</option>
                  <option value='User'>User</option>
                  <option value='Responsable'>Responsable</option>
                </select>
              </form>
            )}
          </div>
          {role == 'Responsable' && (
            <div className='flex  mt-4'>
              <h4 className='text-2xl font-semibold'>Affecter une Boutique:</h4>
              <form class='max-w-sm mx-auto'>
                <select
                  onChange={(e) => setRole(e.target.value)}
                  id='countries'
                  class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                >
                  <option selected>Choisir une boutique</option>
                  <option value='User'>User</option>
                  <option value='Responsable'>Responsable</option>
                </select>
              </form>
            </div>
          )}
          <div>
            <button
              type='button'
              onClick={() => setEdit(false)}
              class='mt-12 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
            >
              Retour
            </button>
            <button
              type='button'
              onClick={() => setOption(!option)}
              class='mt-12 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
            >
              changer Role
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default GererUtilisateur
