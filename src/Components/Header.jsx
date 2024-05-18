import React, { useState, useContext, useEffect } from 'react'
import logo from '../Assets/logo.webp'
import searchcion from '../Assets/search-icon.png'
import pannel from '../Assets/card.png'
import avatar from '../Assets/avatar.png'
import { UserContext } from '../Usercontext'
import { useNavigate } from 'react-router-dom'

function Header() {
  const [showSearchBox, setShowbox] = useState(false)
  const [toggleDropDwn, setToggle] = useState(false)
  const { data, setData } = useContext(UserContext)
  const [isUser, setIsUser] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [userLastname, setUserLastname] = useState('')
  const toggleSearchBox = () => {
    setShowbox(!showSearchBox)
  }

  useEffect(() => {
    function checkRole() {
      const userDataString = localStorage.getItem('userData')
      if (userDataString) {
        const userData = JSON.parse(userDataString)
        setUserName(userData.name)
        setUserLastname(userData.lastName)
        setUserEmail(userData.email)
        if (userData.role === 'User') {
          setIsUser(true)
        } else {
          setIsUser(false)
        }
      } else {
        console.error('User data not found in local storage')
      }
    }
    checkRole()
  }, [])

  const navigate = useNavigate()
  const handlelogout = () => {
    localStorage.clear()
    navigate('/login')
  }

  return (
    <div className='sticky top-0 bg-white z-10'>
      {showSearchBox ? (
        <div>
          <div className='h-[15vh] flex justify-center items-center border border-blue bg-gray'>
            <div className='w-72'>
              <div className='relative w-full min-w-[200px] h-10'>
                <input
                  className='w-[70vh] peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-2 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border border border-black focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5  border-blue-gray-200 focus:border-gray-900'
                  placeholder=' '
                />
                <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
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
              <a href='/home'>
                <img className='w-14' src={logo} alt='Logo' />
              </a>
              <a
                href='/home'
                className='hover:underline focus:underline focus:font-normal font-thin sticky px-2 hover:scale-110'
              >
                Home
              </a>

              <a
                href='/'
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
            <div className='flex gap-3 items-center'>
              <img
                src={searchcion}
                onClick={toggleSearchBox}
                className='w-8 hover:scale-110 hover:cursor-pointer'
                alt='Search Icon'
              />
              <a href='/panier'>
                <img
                  src={pannel}
                  className='w-8 hover:scale-110 hover:cursor-pointer'
                  alt='Panel Icon'
                />
              </a>

              <div
                onMouseEnter={() => setToggle(!toggleDropDwn)}
                onMouseLeave={() => setToggle(!toggleDropDwn)}
              >
                <img
                  id='avatarButton'
                  type='button'
                  data-dropdown-toggle='userDropdown'
                  data-dropdown-placement='bottom-start'
                  className='w-10 h-10 rounded-full cursor-pointer'
                  src={avatar}
                  alt='User dropdown'
                />
                {toggleDropDwn ? (
                  <div
                    id='userDropdown'
                    className='z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600'
                  >
                    <div class='px-4 py-3 text-sm text-gray-900 dark:text-white'>
                      <div>
                        {userName} {userLastname}
                      </div>
                      <div className='font-medium truncate'>{userEmail}</div>
                    </div>
                    <ul
                      className='py-2 text-sm text-gray-700 dark:text-gray-200'
                      aria-labelledby='avatarButton'
                    >
                      {!isUser && (
                        <li>
                          <a
                            href='/responsabledashboard'
                            className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                          >
                            Dashboard
                          </a>
                        </li>
                      )}
                      <li>
                        <a
                          href='#'
                          className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                        >
                          Profile
                        </a>
                      </li>
                    </ul>
                    <div className='py-1'>
                      <a
                        href='#'
                        onClick={handlelogout}
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                      >
                        Sign out
                      </a>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default Header
