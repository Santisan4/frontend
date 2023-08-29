import { Link } from 'react-router-dom'
import { Check, LeftArrow } from '../../components/Icons'
import './style.css'

export function Review (): JSX.Element {
  return (
    <section className='review-container'>
      <div className='modal'>
        <div className='check-container'> <Check /></div>
        <h1 className='title-review'>We're on it!</h1>
        <div className='description'>
          <p className='review-p'>Your payment has been received and you'll </p>
          <p className='review-p'>get notifications for your order's date</p>
        </div>

        <Link to='/' className='button-arrow'> <LeftArrow /> Go back home</Link>
      </div>
    </section>
  )
}
