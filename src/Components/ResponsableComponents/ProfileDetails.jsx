import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'

function ProfileDetails(props) {
  const [disabled, setDisabled] = useState(true)
  var userId = props.value._id
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    adresse: '',
    telephone: '',
  })
  const [refresh, setRefresh] = useState(0)
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.put(
        `http://localhost:3000/user/updateUser/${userId}`,
        formData,
      )
      console.log('User updated successfully:', response.data)
      fetchUser(userId)
    } catch (error) {
      console.error('Registration failed:', error)
    }
  }
  console.log(userId)

  async function fetchUser(userI) {
    try {
      const response = await axios.get(
        `http://localhost:3000/user//getUser/${userId}`,
      )
      localStorage.setItem('userData', JSON.stringify(response.data))
    } catch (error) {
      console.error('Error fetching user:', error)
    }
  }

  return (
    <div>
      <h1 className='text-3xl font-bold'>Profile</h1>
      <div className='flex flex-col mt-8'>
        <div className='grid grid-cols-2 gap-8'>
          <div className='flex flex-col'>
            <label>Nom</label>
            <input
              name='name'
              value={formData.name}
              onChange={handleInputChange}
              className='border-2 mt-2 h-10 px-4'
              placeholder={props.value.name}
              disabled={disabled ? true : false}
            ></input>
          </div>
          <div className='flex flex-col'>
            <label>Prenom</label>
            <input
              name='lastName'
              value={formData.lastName}
              onChange={handleInputChange}
              className='border-2 mt-2 h-10 px-4'
              placeholder={props.value.lastName}
              disabled={disabled ? true : false}
            ></input>
          </div>
        </div>
        <div className='flex flex-col mt-4'>
          <label>Email</label>
          <input
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            type='Email'
            className='border-2 mt-2 h-10 px-4'
            placeholder={props.value.email}
            disabled={disabled ? true : false}
          ></input>
        </div>
        <div className='grid grid-cols-2 gap-8 mt-4'>
          <div className='flex flex-col'>
            <label>Adresse</label>
            <input
              name='adresse'
              value={formData.adresse}
              onChange={handleInputChange}
              className='border-2 mt-2 h-10 px-4'
              placeholder={props.value.adresse}
              disabled={disabled ? true : false}
            ></input>
          </div>
          <div className='flex flex-col'>
            <label>Téléphone</label>
            <input
              name='telephone'
              value={formData.telephone}
              onChange={handleInputChange}
              className='border-2 mt-2 h-10 px-4 '
              placeholder={props.value.telephone}
              disabled={disabled ? true : false}
            ></input>
          </div>
        </div>
        <div className='mt-12 '>
          <button
            className='bg-blue-400 w-40 h-10 hover:bg-blue-500'
            onClick={() => setDisabled(false)}
          >
            Editer Profile
          </button>
          {!disabled && (
            <button
              className='bg-gray-600 w-40 h-10 hover:bg-gray-700 text-white ml-8 '
              onClick={handleSubmit}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProfileDetails
