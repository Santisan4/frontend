import { useContext } from 'react'
import { FiltersContext } from '../context/filters'
import { type UseFiltersHook, type ProductData } from '../types'

export function useFilters (): UseFiltersHook {
  const context = useContext(FiltersContext)
  if (context === null) {
    throw new Error('useFilters must be used within a FiltersProvider')
  }

  const { filters, setFilters } = context

  const filterProducts = (products: ProductData[]): ProductData[] => {
    return products.filter(product => {
      return product.price >= filters.minPrice &&
      (
        product.category === filters.category ||
        filters.category === 'Todos'
      )
    })
  }

  return { filters, setFilters, filterProducts }
}
