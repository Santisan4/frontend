import { useContext } from 'react'
import { UserContext, type UserContextType } from '../context/user.tsx'

export function useUser (): UserContextType {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('You probably forgot to put <UserProvider>.')
  }

  return context
}
