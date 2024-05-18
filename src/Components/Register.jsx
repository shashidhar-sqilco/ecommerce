import React, { useState } from 'react';
import loginimg from '../Assets/loginside.jpg';
import { Input, initTWE } from 'tw-elements';
import { useNavigate } from 'react-router-dom';

initTWE({ Input });

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    adresse: '',
    telephone: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a successful registration by storing user data in local storage
    try {
      localStorage.setItem('userData', JSON.stringify(formData));
      console.log('User registered successfully:', formData);
      navigate('/login'); // Redirect to dashboard after registration
    } catch (error) {
      console.error('Registration failed:', error);
      setError(true);
    }
  };

  return (
    <div className='grid grid-cols-2 my-20 shadow-md mx-72 drop-shadow-2xl'>
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
            <h1 className='text-3xl font-bold text-gray-600'>Account</h1>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-4 mt-8'>
          <div className='grid grid-cols-2 gap-2'>
            <div className='relative'>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                className='w-[22vh] h-14 peer m-0 block h-[58px] border border-black focus:border-2 border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-400 dark:text-white dark:autofill:shadow-autofill dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]'
                id='floatingInputName'
                placeholder='name@example.com'
              />
              <label
                htmlFor='floatingInputName'
                className='pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary'
              >
                Name
              </label>
            </div>
            <div className='relative'>
              <input
                type='text'
                name='lastName'
                value={formData.lastName}
                onChange={handleInputChange}
                className='w-[22vh] h-14 peer m-0 block h-[58px] border border-black focus:border-2 border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-400 dark:text-white dark:autofill:shadow-autofill dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]'
                id='floatingInputLastName'
                placeholder='name@example.com'
              />
              <label
                htmlFor='floatingInputLastName'
                className='pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary'
              >
                Lastname
              </label>
            </div>
          </div>
          <div className='relative'>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              className='w-[45vh] peer m-0 block h-[58px] w-full border border-black focus:border-2 border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-400 dark:text-white dark:autofill:shadow-autofill dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]'
              id='floatingInputEmail'
              placeholder='name@example.com'
            />
            <label
              htmlFor='floatingInputEmail'
              className='pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary'
            >
              Email
            </label>
            <div className='grid grid-cols-2 gap-2 mt-4'>
              <div className='relative'>
                <input
                  type='text'
                  name='adresse'
                  value={formData.adresse}
                  onChange={handleInputChange}
                  className='w-[22vh] h-14 peer m-0 block h-[58px] border border-black focus:border-2 border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-400 dark:text-white dark:autofill:shadow-autofill dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]'
                  id='floatingInputAdresse'
                  placeholder='name@example.com'
                />
                <label
                  htmlFor='floatingInputAdresse'
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
                  className='w-[22vh] h-14 peer m-0 block h-[58px] border border-black focus:border-2 border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-400 dark:text-white dark:autofill:shadow-autofill dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]'
                  id='floatingInputTelephone'
                  placeholder='name@example.com'
                />
                <label
                  htmlFor='floatingInputTelephone'
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
                  className='w-[45vh] h-14 peer m-0 block h-[58px] border border-black focus:border-2 border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-400 dark:text-white dark:autofill:shadow-autofill dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]'
                  id='floatingInputPassword'
                  placeholder='name@example.com'
                />
                <label
                  htmlFor='floatingInputPassword'
                  className='pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary'
                >
                  Password
                </label>
              </div>
            </div>
            <div className='grid grid-cols-2 mt-2'>
              <p className='text-xs text-left'>Already have an account?</p>
              <a className='text-xs text-left underline' href='/login'>
                Login
              </a>
            </div>
          </div>
        </div>

        <button
          type='submit'
          onClick={handleSubmit}
          className='w-28 ml-12 mt-8 btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-gray-500 hover:bg-white group py-1.5 px-2.5'
        >
          <span className='absolute bottom-0 left-0 w-56 h-48 transition-all duration-500 ease-out translate-x-full translate-y-full bg-black mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0'></span>
          <span className='relative w-full ml-4 text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white'>
            Register
          </span>
        </button>
        {error && (
          <div className='w-64 px-2 py-2 mt-8 ml-20 bg-red-300 rounded'>
            <p className='text-center'>Registration failed!</p>
          </div>
        )}
      </div>
      <div>
        <img src={loginimg} alt='login img' className='h-[75vh]' />
      </div>
    </div>
  );
}

export default Register;
