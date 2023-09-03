import { useContext } from 'react'
import { CartContext } from '../context/cart'
import { type CartContextType } from '../types'

export function useCart (): CartContextType {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('useCart must be used within in a CartProvider')
  }

  return context
}
