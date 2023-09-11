import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, DeleteIcon } from '../../components/Icons'
import './Cart.css'
import { useCart } from '../../hooks/useCart'
import { type ProductData } from '../../types'
import { useUser } from '../../hooks/useUser'
import { useState } from 'react'

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
      <div className='header-cart'>
        <Link className='arrow' to='/'> <ArrowLeft /> </Link>
        <h1> Mi Carrito ({totalItems})</h1>
      </div>

      <div className='items-summary-container'>

        <ul className='cart-items'>

          {
            totalItems === 0
              ? <p>your cart is empty!</p>
              : cart.map(item => {
                return (
                  <li key={item.id} className='item-container'>
                    <div className='item-info'>
                      <img className='img-product-cart' src={item.image} alt='' />
                    </div>

                    <div className='item-info'>
                      <p>{item.title}</p>
                      <div id='quantity'>
                        <span className='button-q' onClick={() => { handleClickRemove(item) }}> - </span>
                        <p>{item.quantity}</p>
                        <span className='button-q' onClick={() => { handleClickAdd(item) }}> + </span>
                      </div>
                    </div>

                    <div className='item-info'>
                      <p>${item.price}</p>
                      <button onClick={() => { handleRemoveProduct(item) }}><DeleteIcon /></button>
                    </div>
                  </li>
                )
              })
          }
        </ul>

        <div className='summary'>

          <h2>Total</h2>
          <p>Items: {totalItems}</p>
          <h4>Total: ${totalPrice}</h4>

          <button onClick={handleCheckout} className='button-checkout'> Checkout </button>
          <p className='error-message'>{error}</p>

        </div>
      </div>

    </section>
  )
}
