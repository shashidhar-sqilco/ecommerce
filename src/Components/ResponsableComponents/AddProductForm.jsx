import React, { useState, useEffect, useRef } from 'react'
import '../ResponsableComponents/AddproductStyle.css'
import axios from 'axios'
import { Cloudinary } from '@cloudinary/url-gen'

function AddPfroductForm() {
  // const cloudinaryRef = useRef()
  // const widgetRef = useRef()
  // useEffect(() => {
  //   cloudinaryRef.current = window.Cloudinary
  //   widgetRef.current = cloudinaryRef.current.createUploadWidget(
  //     {
  //       cloudName: 'dece046ba',
  //       uploadPreset: 'wassimsd',
  //     },
  //     function (error, result) {
  //       console.log(result)
  //     },
  //   )
  // }, [])
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    categorie: '',
    expediteur: '',
    image: '',
  })
  const [file, setFile] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'http://localhost:3000/article/addArticle',
        formData,
      )
      console.log('produit ajouté avec succes:', response.data)
    } catch (error) {
      console.error('produit non ajouté', error)
    }
  }

  function uploadImage(e) {
    const file = e.target.files[0]
    const form = new FormData()
    form.append('file', file)
    form.append('upload_preset', 'wassimsd')
    axios
      .post('https://api.cloudinary.com/v1_1/dece046ba/upload', form)
      .then((response) => {
        console.log('Image uploaded successfully:', response.data.secure_url)
        setFormData((prevState) => ({
          ...prevState,
          image: response.data.secure_url,
        }))
      })
      .catch((error) => {
        console.error('Error uploading image:', error)
      })
  }

  const errMessages = document.querySelectorAll('#error')

  function toggleError() {
    errMessages.forEach((el) => {
      el.classList.toggle('hidden')

      const allBorders = document.querySelectorAll('.border-gray-200')
      const allTexts = document.querySelectorAll('.text-gray-500')
      allBorders.forEach((el) => {
        el.classList.toggle('border-red-600')
      })
      allTexts.forEach((el) => {
        el.classList.toggle('text-red-600')
      })
    })
  }
  return (
    <div className=''>
      <div className='bg-white '>
        <h1 className='mb-8 text-2xl font-bold'>Ajouter un Produit</h1>
        <form id='form'>
          <div className='relative z-0 w-40 mb-5'>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleInputChange}
              placeholder=' '
              required
              className='block w-full px-0 pt-3 pb-2 mt-0 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-black'
            />
            <label
              for='name'
              className='absolute text-gray-500 duration-300 top-3 -z-1 origin-0'
            >
              Nom du produit
            </label>
            <span className='hidden text-sm text-red-600' id='error'>
              Name is required
            </span>
          </div>

          <div className='relative z-0 w-full mb-5'>
            <input
              type='text'
              name='description'
              placeholder=' '
              value={formData.description}
              onChange={handleInputChange}
              className='block w-full px-0 pt-3 pb-2 mt-0 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-black'
            />
            <label
              for='email'
              className='absolute text-gray-500 duration-300 top-3 -z-1 origin-0'
            >
              Description
            </label>
            <span className='hidden text-sm text-red-600' id='error'>
              Description is required
            </span>
          </div>

          <div className='relative z-0 w-full mb-5'>
            <input
              type='text'
              placeholder=' '
              name='expediteur'
              value={formData.expediteur}
              onChange={handleInputChange}
              className='block w-full px-0 pt-3 pb-2 mt-0 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-black'
            />
            <label
              for='password'
              className='absolute text-gray-500 duration-300 top-3 -z-1 origin-0'
            >
              Expediteur
            </label>
            <span className='hidden text-sm text-red-600' id='error'>
              Expediteur is required
            </span>
          </div>

          <div className='flex flex-row space-x-4'>
            <div className='relative z-0 w-full mb-5'>
              <input
                type='number'
                name='stock'
                placeholder=' '
                value={formData.stock}
                onChange={handleInputChange}
                onclick="this.setAttribute('type', 'date');"
                class='pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200'
              />
              <label
                for='date'
                className='absolute text-gray-500 duration-300 top-3 -z-1 origin-0'
              >
                stock
              </label>
              <span className='hidden text-sm text-red-600' id='error'>
                stock is required
              </span>
            </div>
            <div className='relative z-0 w-full'>
              <input
                type='text'
                name='categorie'
                value={formData.categorie}
                onChange={handleInputChange}
                placeholder=' '
                onclick="this.setAttribute('type', 'time');"
                className='block w-full px-0 pt-3 pb-2 mt-0 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-black'
              />
              <label
                for='time'
                className='absolute text-gray-500 duration-300 top-3 -z-1 origin-0'
              >
                categorie
              </label>
              <span className='hidden text-sm text-red-600' id='error'>
                Time is required
              </span>
            </div>
          </div>

          <div className='relative z-0 w-full mb-5'>
            <input
              type='number'
              name='price'
              value={formData.price}
              onChange={handleInputChange}
              placeholder=' '
              className='block w-full px-0 pt-3 pb-2 pl-5 mt-0 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-black'
            />
            <div className='absolute top-0 left-0 mt-3 ml-1 text-gray-400'>
              Dt
            </div>
            <label
              for='money'
              className='absolute ml-4 text-gray-500 duration-300 top-3 left-5 -z-1 origin-0'
            >
              Prix
            </label>
            <span className='hidden text-sm text-red-600' id='error'>
              Prix est necessaire
            </span>
          </div>

          <label
            class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            for='file_input'
          >
            Upload file
          </label>
          <input
            class='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
            aria-describedby='file_input_help'
            id='file_input'
            type='file'
            onChange={(e) => uploadImage(e)}
          />
          <p
            class='mt-1 text-sm text-gray-500 dark:text-gray-300'
            id='file_input_help'
          ></p>

          <button
            id='button'
            type='button'
            onClick={handleSubmit}
            className='w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear bg-blue-400 rounded-lg shadow outline-none hover:bg-blue-500 hover:shadow-lg focus:outline-none'
          >
            Ajouter au boutique
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddPfroductForm
