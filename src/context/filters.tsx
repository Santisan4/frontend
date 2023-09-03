import { createContext, useState } from 'react'
import { type FitlersContextType } from '../types'

interface Props {
  children: React.ReactNode
}

export const FiltersContext = createContext<FitlersContextType | undefined>(undefined)

export function FiltersProvider ({ children }: Props): JSX.Element {
  const [filters, setFilters] = useState({
    category: 'All',
    minPrice: 0
  })

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
