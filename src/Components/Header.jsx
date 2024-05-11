import React, { useState } from 'react'
import logo from '../Assets/logo.webp'
import searchcion from '../Assets/search-icon.png'
import pannel from '../Assets/card.png'

function Header() {
  const [showSearchBox, setShowbox] = useState(false)

  const toggleSearchBox = () => {
    setShowbox(!showSearchBox)
  }

  return (
    <div className='sticky top-0 bg-white z-10'>
      {showSearchBox ? (
        <div>
          <div className='h-[15vh] flex justify-center items-center border border-blue bg-gray'>
            <div class='w-72'>
              <div class='relative w-full min-w-[200px] h-10'>
                <input
                  class='w-[70vh] peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-2 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border border border-black focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5  border-blue-gray-200 focus:border-gray-900'
                  placeholder=' '
                />
                <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                  Search
                </label>
                <button></button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='shadow'>
          <div className='flex justify-between items-center px-40 h-28 '>
            <div className='flex items-center gap-6 '>
              <a href='#'>
                <img className='w-14' src={logo} alt='Logo' />
              </a>
              <a
                href='/'
                className='hover:underline focus:underline focus:font-normal font-thin sticky px-2 hover:scale-110'
              >
                Home
              </a>
              <a
                href='#'
                className='hover:underline focus:underline focus:font-normal font-thin sticky px-2 hover:scale-110'
              >
                Catalogue
              </a>
              <a
                href='#'
                className='hover:underline focus:underline focus:font-normal font-thin sticky px-2 hover:scale-110'
              >
                Contact
              </a>
              <a
                href='/stores'
                className='hover:underline focus:underline focus:font-normal font-thin sticky px-2 hover:scale-110'
              >
                Stores
              </a>
            </div>
            <div class='flex gap-3 items-center'>
              <img
                src={searchcion}
                onClick={toggleSearchBox}
                className='w-8 hover:scale-110 hover:cursor-pointer'
                alt='Search Icon'
              />
              <img
                src={pannel}
                className='w-8 hover:scale-110 hover:cursor-pointer'
                alt='Panel Icon'
              />
              <button class='rounded-lg border-2 border-black w-16 ml-8'>
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default Header
