import React from 'react'

function AddStore() {
  return (
    <div>
      <div className=''>
        <div className=' bg-white'>
          <h1 className='text-2xl font-bold mb-8'>Ajouter un Boutique</h1>
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
                Nom du boutique
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
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  className='pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200'
                />
                <label className='absolute duration-300 top-3 -z-1 origin-0 text-gray-500'>
                  Email
                </label>
                <span className='text-sm text-red-600 hidden' id='error'>
                  Email is required
                </span>
              </div>
              <div className='relative z-0 w-full mb-5'>
                <input
                  type='text'
                  placeholder=' '
                  name='telephone'
                  value={formData.telephone}
                  onChange={handleInputChange}
                  className='pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200'
                />
                <label
                  for='password'
                  className='absolute duration-300 top-3 -z-1 origin-0 text-gray-500'
                >
                  Telephone
                </label>
                <span className='text-sm text-red-600 hidden' id='error'>
                  Telephone is required
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
    </div>
  )
}

export default AddStore
