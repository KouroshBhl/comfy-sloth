import React, { useContext, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UserContext = React.createContext()
export const UserProvider = ({ children }) => {
  const { loginWithRedirect, isAuthenticated, logout, user, isLoading } =
    useAuth0()

  const [myUser, setMyUser] = useState(null)

  useEffect(() => {
    if (!isAuthenticated) return setMyUser(false)
    setMyUser(user)
  }, [isAuthenticated])

  return (
    <UserContext.Provider
      value={{ loginWithRedirect, isAuthenticated, logout, myUser, isLoading }}
    >
      {children}
    </UserContext.Provider>
  )
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}
