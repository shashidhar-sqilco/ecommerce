import React, { useEffect } from 'react'
import loginimg from '../Assets/loginside.jpg'
import logo from '../Assets/logo.webp'
import { useState, useContext } from 'react'
import axios from 'axios'
import { Input, initTWE } from 'tw-elements'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../Usercontext'

initTWE({ Input })

function Login() {
  const { data, setData } = useContext(UserContext)
  const [error, setError] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    setError(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'http://localhost:3000/user/login',
        formData,
      )
      console.log('User registered successfully:', response.data.userId)
      navigate('/')
      fetchUser(response.data.userId)
    } catch (error) {
      console.error('Registration failed:', error)
      setError(true)
    }
  }
  async function fetchUser(userId) {
    try {
      const response = await axios.get(
        `http://localhost:3000/user/getUser/${userId}`,
      )

      setData(response.data)
      localStorage.setItem('userData', JSON.stringify(response.data))
    } catch (error) {
      console.error('Error fetching user:', error)
    }
  }

  return (
    <div className='grid grid-cols-2 mx-72 my-20  shadow-md drop-shadow-2xl'>
      <div className='px-8'>
        <div className='grid grid-cols-3'>
          <div>
            <h1 className='text-lg font-semibold'>your logo</h1>
          </div>
        </div>
        <div className='flex flex-col'>
          <div>
            <h1 className='text-6xl text-gray-500'>Hello,</h1>
          </div>
          <div>
            <h1 className='font-bold text-6xl text-gray-600'>Welcome!</h1>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center  gap-4 mt-8'>
          <div class='relative mb-3'>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              className='min-w-80 peer m-0 block h-[58px]  border border-black focus:border-2 border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-400 dark:text-white dark:autofill:shadow-autofill dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]'
              id='floatingInput1'
              placeholder='name@example.com'
            />
            <label
              for='floatingInput1'
              class='pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary'
            >
              Email
            </label>
          </div>
          <div class='relative mb-3'>
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleInputChange}
              className='min-w-80 peer m-0 block h-[58px]  border border-black focus:border-2 border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-400 dark:text-white dark:autofill:shadow-autofill dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]'
              id='floatingInput'
              placeholder='name@example.com'
            />
            <label
              for='floatingInput'
              class='pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary'
            >
              Password
            </label>
            <div className='grid grid-cols-2 mt-2'>
              <p className='text-xs text-left '>Dont have an account yet?</p>
              <a className='text-xs text-left underline' href='/register'>
                Sign Up
              </a>
            </div>
          </div>
        </div>

        <button
          type='Submit'
          onClick={handleSubmit}
          className='w-28 ml-12 mt-8 btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-gray-500  hover:bg-white group py-1.5 px-2.5'
        >
          <span className='w-56 h-48  bg-black absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0'></span>
          <span className='ml-6 relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white'>
            Log In
          </span>
        </button>
        {error && (
          <div className='w-64 bg-red-300 rounded ml-20 mt-8 py-2 px-2'>
            <p className='text-center'>Email ou Mot de passe Invalide!!</p>
          </div>
        )}
      </div>
      <div>
        <img src={loginimg} alt='login img' className='h-[75vh]' />
      </div>
    </div>
  )
}

export default Login
