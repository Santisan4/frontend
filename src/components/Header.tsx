import { Link } from 'react-router-dom'
import { Cart, CloseIcon, DashboardIcon, HomeIcon, IconProducts, Logo, MenuMobile, SettingIcon, User } from './Icons.tsx'
import { useState } from 'react'

import { UserActive } from './UserActive/UserActive.tsx'
import { useUser } from '../hooks/useUser.tsx'

export function Header (): JSX.Element {
  const { user } = useUser()
  const [checked, setChecked] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setChecked(e.target.checked)
  }

  const pathWithoutHeader = ['/settings', '/admin/dashboard', '/admin/products']

  const className = pathWithoutHeader.includes(window.location.pathname) ? 'no-header' : 'header'

  return (
    <header className={className}>

      <label htmlFor='menu' className='menu-button'>
        <MenuMobile />
      </label>
      <input type='checkbox' checked={checked} id='menu' hidden onChange={handleChange} />

      <label htmlFor='close' className='close-menu'>
        <CloseIcon />
      </label>
      <input type='checkbox' hidden id='close' checked={checked} onChange={handleChange} />

      <nav className='nav'>
        <div className='logo-container'>
          <Logo />
        </div>
        <div className='items-menu'>
          <Link to='/'> <HomeIcon /> Home </Link>
          <Link to='/products'> <IconProducts /> Products </Link>
          <Link to='/cart'> <Cart /> Cart</Link>
          {
            user === null
              ? <Link to='/user/login'> <User /> User</Link>
              : <Link to='/settings'> <SettingIcon />  My account </Link>
          }
          {
            user !== null && user.admin > 0
              ? <Link to='/admin/dashboard'> <DashboardIcon /> Dashboard </Link>
              : null
          }
        </div>

        {
          user !== null
            ? <UserActive user={user} />
            : ''
        }

      </nav>

    </header>
  )
}
