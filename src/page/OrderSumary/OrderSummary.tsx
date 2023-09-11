import userService from '../../services/user.ts'
import { useCart } from '../../hooks/useCart'
import { useUser } from '../../hooks/useUser.tsx'

import './styles.css'

export function OrderSummary (): JSX.Element {
  const { cart } = useCart()
  const { user } = useUser()

  const userToken = user !== null ? user.token : null

  const totalPrice = cart.reduce((acc, item) => item.price * (item.quantity ?? 0) + acc, 0)
  const totalItems = cart.map(item => item.quantity ?? 0).reduce((acc, quantity) => quantity + acc, 0)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    userService.setToken(userToken)
    userService.payment(cart)
      .then(response => {
        console.log(response)
        const urlMercadoPago = response.init_point
        window.location.href = urlMercadoPago
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <section className='summary-container'>

      <div className='title-payment-container'>
        <div className='title-container'>
          <h2>Por favor, confirme su compra</h2>
          <p className='terms'>Al hacer click en confirmar compra, acepta los <strong>Términos y condiciones de EOS</strong></p>
        </div>

        <h3>Forma de pago</h3>
        <div className='confirm-payment-container'>

          <img className='logo-mp' src='/mp.png' alt='' />

        </div>
      </div>

      <div className='summary-button-container'>
        <div className='order-summary'>
          <h3>Resumen de su compra</h3>
          <div>
            <p>Items</p>
            <p>{totalItems}</p>
          </div>
          <div>
            <p>Total</p>
            <p>$ {totalPrice}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className='button-submit-order'>
          <button> Pagar </button>
        </form>
      </div>
    </section>
  )
}
