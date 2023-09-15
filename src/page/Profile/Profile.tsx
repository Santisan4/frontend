import { Link } from 'react-router-dom'

import { useUser } from '../../hooks/useUser'
import { ArrowLeft, ArrowRight, Edit, FavIcon, OrdersIcon } from '../../components/Icons'

import './Profile.css'

export function Profile (): JSX.Element {
  const { user } = useUser()

  const userPath = user !== null ? user.name : ''

  return (
    <section className='profile-page-container'>
      <div className='title-profile-container'>
        <Link to='/settings' className='icon-back-profile'><ArrowLeft /></Link>
        <h1 className='title-profile'>Perfil</h1>
      </div>

      <div className='info-profile-container'>
        <img className='img-profile' src='/rengo2.jpeg' alt='' />
        <h3 className='name-profile'>{user?.name}</h3>
        <p className='email-profile'>{user?.email}</p>
      </div>

      <Link to={`/settings/${userPath}/edit`} className='edit-section'><Edit /> Editar perfil</Link>

      <div className='info-items-profile'>

        <div className='item-profile'>
          <div className='container-title-item'>
            <Link to={`/settings/${userPath}/my-orders`} className='item-title'>
              <OrdersIcon />
              Mis compras
            </Link>
          </div>
          <span className='icon-profile'><ArrowRight /></span>
        </div>

        <div className='item-profile'>
          <div className='container-title-item'>
            <p className='item-title'>
              <FavIcon />
              Mis favoritos
            </p>
          </div>
          <span className='icon-profile'><ArrowRight /></span>
        </div>

      </div>
    </section>
  )
}
