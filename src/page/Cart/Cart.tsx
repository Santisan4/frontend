import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { type ProductData } from '../../types'
import { useCart } from '../../hooks/useCart'
import { useUser } from '../../hooks/useUser'

import { DeleteIcon } from '../../components/Icons'

import './Cart.css'

export function Cart (): JSX.Element {
  const { cart, addToCart, removeFromCart, decrementQuantity } = useCart()
  const { user } = useUser()
  const [error, setError] = useState<string | null>(null)

  const navigate = useNavigate()

  const totalPrice = cart.reduce((acc, item) => item.price * (item.quantity ?? 0) + acc, 0)
  const totalItems = cart.map(item => item.quantity ?? 0).reduce((acc, quantity) => quantity + acc, 0)

  const handleClickAdd = (item: ProductData): void => {
    addToCart(item)
  }

  const handleRemoveProduct = (item: ProductData): void => {
    removeFromCart(item)
  }

  const handleClickRemove = (item: ProductData): void => {
    decrementQuantity(item)
  }

  const handleCheckout = (): void => {
    if (user === null) {
      setError('Debes iniciar sesion')
      setTimeout(() => {
        setError(null)
      }, 5000)
      return
    }

    if (totalItems === 0) {
      setError('Carrito vacio!')
      setTimeout(() => {
        setError(null)
      }, 5000)
      return
    }
    navigate('/cart/checkout/payment')
  }

  return (
    <section className='cart-container'>

      <div className='items-summary-container'>

        <ul className='cart-items'>
          <h1 className='title-cart'> Mi Carrito ({totalItems})</h1>

          {
            totalItems === 0
              ? <p className='label-empty-cart'>tu carrito esta vacio!</p>
              : cart.map(item => {
                return (
                  <li key={item.id} className='item-container'>
                    <div className='item-info'>
                      <div className='img-title-cart'>
                        <img className='img-product-cart' src={item.image} alt='' />
                        <h3>{item.title}</h3>
                      </div>
                      <div className='quantity-price-cart'>
                        <div className='items-q'>
                          <span className='button-q' onClick={() => { handleClickRemove(item) }}> - </span>
                          <p className='button-q'>{item.quantity}</p>
                          <span className='button-q' onClick={() => { handleClickAdd(item) }}> + </span>
                        </div>

                        <p>${item.price}</p>
                        <button className='button-cart-delete' onClick={() => { handleRemoveProduct(item) }}><DeleteIcon /></button>
                      </div>
                    </div>
                  </li>
                )
              })
          }
        </ul>

        <div className='summary'>

          <h2 className='title-summary-cart'> <span>Detalle de tu carrito </span></h2>
          <p className='items-summary-cart'>Items:  <span>{totalItems}</span></p>
          <h4 className='total-summary-cart'>Total: <span> ${totalPrice} </span></h4>

          <p className='error-message'>{error}</p>
          <button onClick={handleCheckout} className='button-checkout'> Confirmar carrito </button>

        </div>
      </div>

    </section>
  )
}
