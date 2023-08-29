import { useState, useEffect } from 'react'
import { Product, ResponseApi } from '../types'

export function useProducts (): Product[] {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(async (response: ResponseApi) => await response.json())
      .then(data => {
        console.log({ data })
        setProducts(data)
      })
  }, [])

  return { products }
}
