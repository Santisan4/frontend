import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Edit, FavIcon, OrdersIcon } from '../../components/Icons'
import './Profile.css'
import { useUser } from '../../hooks/useUser'

export function Profile (): JSX.Element {
  const { user } = useUser()
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

      <Link to='/settings/santiago/edit' className='edit-section'><Edit /> Editar perfil</Link>

      <div className='info-items-profile'>

        <div className='item-profile'>
          <div className='container-title-item'>
            <p className='item-title'>
              <OrdersIcon />
              Mis compras
            </p>
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
