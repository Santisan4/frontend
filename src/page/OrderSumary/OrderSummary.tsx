import './styles.css'
import { useCart } from '../../hooks/useCart'

export function OrderSummary (): JSX.Element {
  const { cart } = useCart()

  const totalPrice = cart.reduce((acc, item) => item.price * (item.quantity ?? 0) + acc, 0)
  const totalItems = cart.map(item => item.quantity ?? 0).reduce((acc, quantity) => quantity + acc, 0)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
  }

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
            <img className='logo-mc' src='/mp.png' alt='' />
            {/* <p className='card'> <img className='logo-mc' src='/mp.png' alt='' /> **** 6789</p>
            <p> 01/24 </p> */}
          </div>

        </div>
      </div>

      <div className='summary-button-container'>
        <div className='order-summary'>
          <h3>Order summary</h3>
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
          <button> Pay</button>
        </form>
        {/* <Link to='/cart/checkout/payment/review' className='button-submit-order'>Pay</Link> */}
      </div>
    </section>
  )
}
