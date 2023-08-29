import { Link } from 'react-router-dom'
import { ArrowLeft, DeleteIcon } from '../../components/Icons'
import './Cart.css'

export function Cart (): JSX.Element {
  return (
    <section className='cart-container'>
      <div className='header-cart'>
        <Link className='arrow' to='/'> <ArrowLeft /> </Link>
        <h1> My Cart (3)</h1>
      </div>

      <div className='items-summary-container'>

        <ul className='cart-items'>
          <li className='item-container'>
            <div className='item-info'>
              <img className='img-product-cart' src='/remera3.webp' alt='' />
            </div>

            <div className='item-info'>
              <p>Product 1</p>
              <div id='quantity'>
                <span className='button-q'> - </span>
                <p>1</p>
                <span className='button-q'> + </span>
              </div>
            </div>

            <div className='item-info'>
              <p>$10.00</p>
              <button><DeleteIcon /></button>
            </div>
          </li>

          <li className='item-container'>
            <div className='item-info'>
              <img className='img-product-cart' src='/zapas1.webp' alt='' />
            </div>

            <div className='item-info'>
              <p>Product 2</p>

              <div id='quantity'>
                <span className='button-q'> - </span>
                <p>1</p>
                <span className='button-q'> + </span>
              </div>

            </div>

            <div className='item-info'>
              <p>$10.00</p>
              <button><DeleteIcon /></button>
            </div>
          </li>

          <li className='item-container'>
            <div className='item-info'>
              <img className='img-product-cart' src='/zapas3.webp' alt='' />
            </div>

            <div className='item-info'>
              <p>Product 3</p>
              <div id='quantity'>
                <span className='button-q'> - </span>
                <p>1</p>
                <span className='button-q'> + </span>
              </div>
            </div>

            <div className='item-info'>
              <p>$10.00</p>
              <button><DeleteIcon /></button>
            </div>
          </li>
        </ul>

        <div className='summary'>

          <h2>Total</h2>
          <p>Items: 3</p>
          <h4>Total: $30.00</h4>

          <Link to='/cart/checkout' className='button-checkout'>Checkout</Link>

        </div>
      </div>

    </section>
  )
}
