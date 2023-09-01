import { createContext, useState } from 'react'
import { type User } from '../types'

interface Props {
  children: React.ReactNode
}

export interface UserContextType {
  user: User | null
  setUser: (user: User | null) => void
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {}
})

export function UserProvider ({ children }: Props): JSX.Element {
  const [user, setUser] = useState<User | null>(null)
  return (
    <UserContext.Provider value={{
      user,
      setUser
    }}
    >
      {children}
    </UserContext.Provider>
  )
}
