import { Link } from 'react-router-dom'
import './styles.css'

export function OrderSummary (): JSX.Element {
  return (
    <section className='summary-container'>

      <div className='title-payment-container'>
        <div className='title-container'>
          <h2>Please confirm submit your order</h2>
          <p className='terms'>By clicking submit order, you agree to Eos <strong>Terms of Use and Privacy Policy</strong></p>
        </div>

        <div className='confirm-payment-container'>

          <div className='payment-edit'>
            <p id='payment'>Payment</p>
            <button>Edit</button>
          </div>

          <div className='card-date'>
            <p className='card'> <img className='logo-mc' src='/mc.png' alt='' /> **** 6789</p>
            <p> 01/24 </p>
          </div>

        </div>
      </div>

      <div className='summary-button-container'>
        <div className='order-summary'>
          <h3>Order summary</h3>
          <div>
            <p>Subtotal</p>
            <p>$ 100.00</p>
          </div>
          <div>
            <p>Total</p>
            <p>$ 100.00</p>
          </div>
        </div>

        <Link to='/cart/checkout/review' className='button-submit-order'>Submit Order</Link>

      </div>
    </section>
  )
}
