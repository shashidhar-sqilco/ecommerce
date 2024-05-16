import React, { useEffect, useState } from 'react'
import ResponsableHeader from '../../Components/ResponsableComponents/ResponsableHeader'
import Header from '../../Components/Header'
import ProfileDetails from '../../Components/ResponsableComponents/ProfileDetails'
import BoutiqueDetails from '../../Components/ResponsableComponents/BoutiqueDetails'
import AddPfroductForm from '../../Components/ResponsableComponents/AddPfroductForm'
import GererUtilisateur from './GererUtilisateur'
import Gererboutiques from './Gererboutiques'

function ResponsableDashboard() {
  const [userRole, setUserRole] = useState('')
  const [name, setName] = useState()
  const [userName, setUserName] = useState()
  const [Email, setEmail] = useState()

  const [rightDisplay, setDisplay] = useState('profiledet')
  const [user, setUserData] = useState({})
  const toggleSearchBox = () => {
    setShowbox(!showSearchBox)
  }

  useEffect(() => {
    function checkRole() {
      const userDataString = localStorage.getItem('userData')
      if (userDataString) {
        const userData = JSON.parse(userDataString)
        setName(userData.name)
        setUserName(userData.lastName)
        setEmail(userData.email)
        setUserData(userData)
        console.log(userData)
        if (userData.role === 'User') {
          setUserRole('User')
        } else if (userData.role === 'Admin') {
          setUserRole('Admin')
        } else {
          setUserRole('Responsable')
        }
      } else {
        console.error('User data not found in local storage')
      }
    }
    checkRole()
  }, [])

  return (
    <div>
      <Header />
      <div className='grid grid-cols-3 mx-60 mt-8'>
        <div className='flex flex-col'>
          <h1 className='text-2xl font-semibold'>
            {name} {userName}
          </h1>
          <h1>{Email}</h1>
          <div className='shadow-lg w-60'>
            <div
              className='mt-4 hover:cursor-pointer bg-gray-300 text-center py-2 hover:bg-gray-400'
              onClick={() => setDisplay('profiledet')}
            >
              Detail du compte
            </div>

            {userRole == 'Responsable' && (
              <div>
                <hr />
                <div
                  className=' hover:cursor-pointer bg-gray-300 text-center py-2 hover:bg-gray-400'
                  onClick={() => setDisplay('boutiquedet')}
                >
                  Detail du Boutique
                </div>
              </div>
            )}
            {userRole == 'Responsable' && (
              <div>
                <hr />
                <div
                  className=' hover:cursor-pointer bg-gray-300 text-center py-2 hover:bg-gray-400'
                  onClick={() => setDisplay('addprod')}
                >
                  Ajouter un produit
                </div>
              </div>
            )}
            <hr />
            {userRole == 'Admin' && (
              <div
                className=' hover:cursor-pointer bg-gray-300 text-center py-2 hover:bg-gray-400'
                onClick={() => setDisplay('gererutil')}
              >
                Gerer les utilisateurs
              </div>
            )}
            {userRole == 'Admin' && (
              <div>
                <hr />
                <div
                  className=' hover:cursor-pointer bg-gray-300 text-center py-2 hover:bg-gray-400'
                  onClick={() => setDisplay('gereboutique')}
                >
                  Gerer les boutiques
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='col-span-2'>
          {rightDisplay == 'addprod' && <AddPfroductForm />}
          {rightDisplay == 'profiledet' && <ProfileDetails value={user} />}
          {rightDisplay == 'boutiquedet' && <BoutiqueDetails />}
          {rightDisplay == 'gereboutique' && <Gererboutiques />}
          {rightDisplay == 'gererutil' && <GererUtilisateur />}
        </div>
      </div>
    </div>
  )
}

export default ResponsableDashboard
