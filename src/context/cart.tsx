import { createContext, useState } from 'react'
import { type CartContextType, type ProductData } from '../types'

type Children = React.ReactNode

export const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider ({ children }: { children: Children }): JSX.Element {
  const [cart, setCart] = useState<ProductData[]>([])

  const addToCart = (product: ProductData): void => {
    // check if product is already in cart
    const indexProduct = cart.findIndex(item => item.id === product.id)
    if (indexProduct >= 0) {
      const newCart = cart.map(item => {
        if (item.id === product.id) {
          return {
            ...product,
            quantity: item.quantity !== undefined ? item.quantity + 1 : item.quantity
          }
        }

        return item
      })
      setCart(newCart)
      return
    }

    const newCart = [...cart, {
      ...product,
      quantity: 1
    }]
    setCart(newCart)
  }

  const removeFromCart = (product: ProductData): void => {
    const newCart = cart.filter(item => item.id !== product.id)
    setCart(newCart)
  }

  const decrementQuantity = (product: ProductData): void => {
    const newCart = cart.map(item => {
      if (item.id === product.id) {
        if (item.quantity === 0) return item
        return {
          ...item,
          quantity: item.quantity !== undefined ? item.quantity - 1 : item.quantity
        }
      }
      return item
    })

    setCart(newCart)
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      decrementQuantity
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
