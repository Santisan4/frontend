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
    const { category, minPrice } = filters

    if (category.includes('Todos') === true || (minPrice === 0 && category.length === 0)) {
      return products
    }

    const filteredProducts = products.filter(product => {
      const isCategoryMatch = category.includes(product.category)
      const isMinPriceMatch = product.price >= minPrice

      return isCategoryMatch === true && isMinPriceMatch
    })

    return filteredProducts
  }

  return { filters, setFilters, filterProducts }
}
