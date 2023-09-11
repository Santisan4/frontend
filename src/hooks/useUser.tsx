import { useContext, useEffect } from 'react'

import { UserContext, type UserContextType } from '../context/user.tsx'
import adminService from '../services/admin.ts'
import userService from '../services/user.ts'

export function useUser (): UserContextType {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('You probably forgot to put <UserProvider>.')
  }

  useEffect(() => {
    const userFromStorage = window.localStorage.getItem('user')
    if (userFromStorage !== null && context.user === null) {
      context.setUser(JSON.parse(userFromStorage))
      adminService.setToken(JSON.parse(userFromStorage).token)
      userService.setToken(JSON.parse(userFromStorage).token)
    }
  }, [])

  return context
}
