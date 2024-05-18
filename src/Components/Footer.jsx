import React from 'react';

function Footer() {
  return (
    <div className='py-4 text-white bg-black footer'>
      <div className='container mx-auto text-left'>
        <h2 className='mb-2 text-2xl text-center'>Contact Us</h2>
        <form className='max-w-md p-4 mx-auto text-white bg-black rounded-full shadow-md'>
          <div className='mb-2'>
            <label className='block mb-1 text-sm font-bold' htmlFor='name'>
              Name
            </label>
            <input
              className='px-3 py-1 text-sm leading-tight text-black bg-white border rounded-full shadow appearance-none w-72 focus:outline-none focus:shadow-outline'
              id='name'
              type='text'
              placeholder='Your Name'
            />
          </div>
          <div className='mb-2'>
            <label className='block mb-1 text-sm font-bold' htmlFor='email'>
              Email
            </label>
            <input
              className='px-3 py-1 text-sm leading-tight text-black bg-white border rounded-full shadow appearance-none w-72 focus:outline-none focus:shadow-outline'
              id='email'
              type='email'
              placeholder='Your Email'
            />
          </div>
          <div className='mb-2'>
            <label className='block mb-1 text-sm font-bold' htmlFor='message'>
              Message
            </label>
            <textarea
              className='px-3 py-1 text-sm leading-tight text-black bg-white border rounded-full shadow appearance-none w-72 focus:outline-none focus:shadow-outline'
              id='message'
              placeholder='Your Message'
              rows='3'
            ></textarea>
          </div>
          <div className='mb-2'>
            <button
              className='px-4 py-1 font-bold text-white bg-black border rounded-full w-72 hover:bg-gray-700 focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Footer;
