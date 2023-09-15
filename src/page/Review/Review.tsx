import { Link } from 'react-router-dom'

import { Check, LeftArrow } from '../../components/Icons'

import './style.css'

export function Review (): JSX.Element {
  return (
    <section className='review-container'>
      <div className='modal'>
        <div className='check-container'> <Check /></div>
        <h1 className='title-review'>Estamos en ello!</h1>
        <div className='description'>
          <p className='review-p'>Su pago ha sido recibido</p>
          <p className='review-p'>será notificado via correo electronico</p>
        </div>

        <Link to='/' className='button-arrow'> <LeftArrow /> Volver a la home </Link>
      </div>
    </section>
  )
}
