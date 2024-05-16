import React from 'react'
import { useState } from 'react'

function QuantityButtonComponent() {
  let [quantity, setQuantity] = useState(0)

  function increment() {
    setQuantity((quantity += 1))
  }

  function decrement() {
    if (quantity > 0) {
      setQuantity((quantity -= 1))
    }
  }
  return (
    <div>
      <div className='relative flex items-center max-w-[8rem] border border-gray-600 fixed'>
        <button
          type='button'
          id='decrement-button'
          data-input-counter-decrement='quantity-input'
          class=' dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200  p-3 h-11 '
          onClick={decrement}
        >
          <svg
            class='w-3 h-3 text-gray-900 dark:text-white'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 18 2'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M1 1h16'
            />
          </svg>
        </button>
        <label
          id='quantity-input'
          aria-describedby='helper-text-explanation'
          class='h-11 text-center text-gray-900 text-sm  block w-full py-2.5 '
        >
          {quantity}
        </label>
        <button
          type='button'
          id='increment-button'
          data-input-counter-increment='quantity-input'
          class='dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200  p-3 h-11'
          onClick={increment}
        >
          <svg
            class='w-3 h-3 text-gray-900 dark:text-white'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 18 18'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M9 1v16M1 9h16'
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default QuantityButtonComponent
