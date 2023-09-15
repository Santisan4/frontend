import { createContext, useState } from 'react'
import { type FiltersType, type FiltersContextType } from '../types'

interface Props {
  children: React.ReactNode
}

export const FiltersContext = createContext<FiltersContextType>({
  filters: {
    category: 'Todos',
    minPrice: 0
  },
  setFilters: () => {}
})

export function FiltersProvider ({ children }: Props): JSX.Element {
  const [filters, setFilters] = useState<FiltersType>({
    category: 'Todos',
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
