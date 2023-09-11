import { Link, useNavigate } from 'react-router-dom'

import adminService from '../../services/admin.ts'
import { useUser } from '../../hooks/useUser.tsx'

import {
  ArrowRight,
  FAQIcon,
  LegalIcon,
  LogoutIcon,
  MyAccountIcon
} from '../../components/Icons'

import './Settings.css'

export function Settings (): JSX.Element {
  const { setUser } = useUser()
  const navigate = useNavigate()

  const handleLogout = (): void => {
    setUser(null)
    adminService.setToken(null)
    window.localStorage.removeItem('user')
    window.localStorage.removeItem('cart')
    navigate('/')
  }

  return (
    <section className='settings-container'>
      <h1 className='title-settings'>Configuración</h1>
      <hr />
      <p className='title-section'>General</p>
      <article className='container-option'>
        <div className='div-option'>
          <p className='p-option'><MyAccountIcon /></p>
          <p className='p-option'>Mi cuenta</p>
        </div>
        <Link to='/settings/santiago' className='p-option-arrow'><ArrowRight /></Link>
      </article>

      <article className='container-option'>
        <div className='div-option'>
          <p className='p-option'><FAQIcon /></p>
          <p className='p-option'>FAQ</p>
        </div>
        <p className='p-option-arrow'><ArrowRight /></p>
      </article>

      <p className='title-section'>Legal</p>
      <article className='container-option'>
        <div className='div-option'>
          <p className='p-option'><LegalIcon /></p>
          <p className='p-option'>Términos y condiciones</p>
        </div>
        <p className='p-option-arrow'><ArrowRight /></p>
      </article>

      <div className='logout-container'>
        <p onClick={handleLogout} className='p-logout'><LogoutIcon /> Logout</p>
      </div>
    </section>
  )
}
