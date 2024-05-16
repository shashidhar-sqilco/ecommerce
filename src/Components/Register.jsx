// import React from 'react'
// import { Link } from 'react-router-dom'
// import Login from './Login'
// import { useState } from 'react'
// import axios from 'axios'

// function Register() {
//   const [formData, setFormData] = useState({
//     name: '',
//     lastName: '',
//     adresse: '',
//     telephone: '',
//     email: '',
//     password: '',
//   })

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setFormData({ ...formData, [name]: value })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       const response = await axios.post(
//         'http://localhost:3000/user/register',
//         formData,
//       )
//       console.log('User registered successfully:', response.data)
//     } catch (error) {
//       console.error('Registration failed:', error)
//     }
//   }

//   return (
//     <div
//       className='flex justify-center items-center backdrop-blur-sm bg-white/30 absolute top-4 left-4 z-10'
//       style={{ height: '100vh' }}
//     >
//       <div className='bg-white shadow-lg w-1/2'>
//         <h1 className='text-center text-4xl font-bold mb-6'>Register</h1>
//         <form onSubmit={handleSubmit}>
//           <div className='inline'>
//             <input
//               name='name'
//               value={formData.username}
//               onChange={handleInputChange}
//               type='text'
//               className='block w-72 py-2.3 px-0 text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-black-600 focus:outline-none focus:ring-0 focus:text-black focus:border-black peer'
//             />
//             <label className='relative text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-3 origin-[0] peer-focus:left-1 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
//               Your Name
//             </label>
//             <input
//               name='lastName'
//               value={formData.lastName}
//               onChange={handleInputChange}
//               type='text'
//               className='block w-72 py-2.3 px-0 text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-black-600 focus:outline-none focus:ring-0 focus:text-black focus:border-black peer'
//             />
//             <label className='absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
//               Your Lastname
//             </label>
//           </div>
//           <div className='relative my-4'>
//             <input
//               type='email'
//               name='email'
//               value={formData.email}
//               onChange={handleInputChange}
//             />
//             <label>Your Email</label>
//           </div>
//           <div className='relative my-4'>
//             <input
//               type='text'
//               name='telephone'
//               value={formData.telephone}
//               onChange={handleInputChange}
//             />
//             <label>Your Phone number</label>
//           </div>
//           <div className='relative my-4'>
//             <input
//               type='password'
//               name='password'
//               value={formData.password}
//               onChange={handleInputChange}
//             />
//             <label>Password</label>
//           </div>
//           <div className='relative my-4'>
//             <input type='password' />
//             <label>Confirm Password</label>
//           </div>
//           <button type='submit'>Register</button>
//         </form>
//         <div className='text-center'>
//           <span>
//             Already registered?<Link to={Login}> Login</Link>
//           </span>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Register
import React from 'react'
import { useState } from 'react'
import loginimg from '../Assets/loginside.jpg'
import { Input, initTWE } from 'tw-elements'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

initTWE({ Input })

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    adresse: '',
    telephone: '',
    email: '',
    password: '',
  })
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'http://localhost:3000/user/register',
        formData,
      )
      console.log('User registered successfully:', response.data)
      localStorage.setItem('userData', JSON.stringify(response.data.user))
      navigate('/')
    } catch (error) {
      console.error('Registration failed:', error)
    }
  }

  // async function fetchUser(userId) {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:3000/user//getUser/${userId}`,
  //     )

  //     setData(response.data)
  //     localStorage.setItem('userData', JSON.stringify(response.data))
  //   } catch (error) {
  //     console.error('Error fetching user:', error)
  //   }
  // }

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
            <h1 className='text-4xl text-gray-500'>Create your</h1>
          </div>
          <div>
            <h1 className='font-bold text-3xl text-gray-600'>Account</h1>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center  gap-4 mt-8'>
          <div className='grid grid-cols-2 gap-2'>
            <div className='relative '>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                className='w-[22vh] h-14 peer m-0 block h-[58px]  border border-black focus:border-2 border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-400 dark:text-white dark:autofill:shadow-autofill dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]'
                id='floatingInput'
                placeholder='name@example.com'
              />
              <label
                for='floatingInput'
                className='pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary'
              >
                Name
              </label>
            </div>
            <div className='relative '>
              <input
                type='text'
                name='lastName'
                value={formData.lastName}
                onChange={handleInputChange}
                className='w-[22vh] h-14 peer m-0 block h-[58px]  border border-black focus:border-2 border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-400 dark:text-white dark:autofill:shadow-autofill dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]'
                id='floatingInput'
                placeholder='name@example.com'
              />
              <label
                for='floatingInput'
                className='pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary'
              >
                Lastname
              </label>
            </div>
          </div>
          <div className='relative '>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              className='w-[45vh] peer m-0 block h-[58px] w-full border border-black focus:border-2 border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-400 dark:text-white dark:autofill:shadow-autofill dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]'
              id='floatingInput'
              placeholder='name@example.com'
            />
            <label
              for='floatingInput'
              className='pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary'
            >
              Email
            </label>
            <div className='grid grid-cols-2 gap-2 mt-4'>
              <div className='relative '>
                <input
                  type='text'
                  name='adresse'
                  value={formData.adresse}
                  onChange={handleInputChange}
                  className='w-[22vh] h-14 peer m-0 block h-[58px]  border border-black focus:border-2 border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-400 dark:text-white dark:autofill:shadow-autofill dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]'
                  id='floatingInput'
                  placeholder='name@example.com'
                />
                <label
                  for='floatingInput'
                  className='pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary'
                >
                  Adresse
                </label>
              </div>
              <div className='relative mb-3'>
                <input
                  type='text'
                  name='telephone'
                  value={formData.telephone}
                  onChange={handleInputChange}
                  className='w-[22vh] h-14 peer m-0 block h-[58px]  border border-black focus:border-2 border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-400 dark:text-white dark:autofill:shadow-autofill dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]'
                  id='floatingInput'
                  placeholder='name@example.com'
                />
                <label
                  for='floatingInput'
                  className='pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary'
                >
                  Telephone
                </label>
              </div>
            </div>
            <div>
              <div className='relative mb-3'>
                <input
                  type='password'
                  name='password'
                  value={formData.password}
                  onChange={handleInputChange}
                  className='w-[45vh] h-14 peer m-0 block h-[58px]  border border-black focus:border-2 border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-400 dark:text-white dark:autofill:shadow-autofill dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]'
                  id='floatingInput'
                  placeholder='name@example.com'
                />
                <label
                  for='floatingInput'
                  className='pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary'
                >
                  Password
                </label>
              </div>
            </div>
            <div className='grid grid-cols-2 mt-2'>
              <p className='text-xs text-left '>Already have an account?</p>
              <a className='text-xs text-left underline' href='/login'>
                Login
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
          <span className='ml-4 relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white'>
            Register
          </span>
        </button>
      </div>
      <div>
        <img src={loginimg} alt='login img' className='h-[75vh]' />
      </div>
    </div>
  )
}

export default Register
