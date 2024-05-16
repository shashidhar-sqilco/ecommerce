import { createContext, useState } from 'react'
import Header from './Components/Header'
import Login from './Components/Login'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [data, setData] = useState({})
  return (
    <UserContext.Provider value={{ data, setData }}>
      {children}
    </UserContext.Provider>
  )
}
