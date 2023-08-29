import { Link } from 'react-router-dom'
import './Checkout.css'

export function Checkout (): JSX.Element {
  return (
    <section className='payment-container'>
      <h2>Payment Methods</h2>

      <div className='container'>

        <input type='checkbox' hidden id='c' />
        <article id='c' className='method'>

          <div>
            <img src='/mc.png' alt='' />
          </div>
          <div>
            <h4>**** **** **** 6789</h4>
            <p>Expires 10/27</p>
          </div>
        </article>

        <article className='method'>
          <div>
            <img src='/visa.png' alt='' />
          </div>
          <div>
            <h4>**** **** **** 6789</h4>
            <p>Expires 10/27</p>
          </div>
        </article>
        <article className='method'>
          <div>
            <img src='/p.png' alt='' />
          </div>
          <div>
            <h4>paypal@hotmail.com</h4>
          </div>
        </article>

        <button className='new-method'>Add method</button>

      </div>

      <Link to='/cart/checkout/payment' className='button-continue'>
        Confirm payment
      </Link>

    </section>
  )
}
