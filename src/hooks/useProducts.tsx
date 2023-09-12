import { useEffect, useState } from 'react'

import productService from '../services/product.ts'
import { type ApiProductsResponse, type ProductData } from '../types'

export function useProducts (): ApiProductsResponse {
  const [products, setProducts] = useState<ProductData[]>([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    productService.getProducts()
      .then(response => {
        setLoading(false)
        setProducts(response)
      })
      .catch(err => {
        console.log(err)
        setErrorMessage(err)
      })
  }, [])

  return { products, errorMessage, loading }
}
