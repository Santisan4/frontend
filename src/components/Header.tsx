import { Link, useNavigate } from 'react-router-dom'
import { Cart, CloseIcon, DashboardIcon, HomeIcon, IconProducts, Logo, MenuMobile, SettingIcon, User } from './Icons.tsx'
import { useState } from 'react'
import { useUser } from '../hooks/useUser.tsx'
import { UserActive } from './UserActive/UserActive.tsx'
import productService from '../services/adminProduct.ts'

export function Header (): JSX.Element {
  const { user, setUser } = useUser()
  const [checked, setChecked] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setChecked(e.target.checked)
  }

  const handleLogout = (): void => {
    setUser(null)
    productService.setToken(user.token)
    window.localStorage.removeItem('user')
    navigate('/')
  }

  return (
    <header className='header'>

      <label htmlFor='menu' className='menu-button'>
        <MenuMobile />
      </label>
      <input type='checkbox' checked={checked} id='menu' hidden onChange={handleChange} />

      <label htmlFor='close' className='close-menu'>
        <CloseIcon />
      </label>
      <input type='checkbox' hidden id='close' checked={checked} onChange={handleChange} />

      {/* <Link to='/' id='logo'>
        <span>Bk'</span>
        <span>Shop</span>
      </Link> */}

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
              : <Link to='*'> <SettingIcon />  My account </Link>
          }
          {
            user !== null && user.admin > 0
              ? <Link to='/admin/dashboard'> <DashboardIcon /> Dashboard </Link>
              : null
          }
        </div>

        {
          user !== null
            ? <div className='div-button'><button className='logout' onClick={handleLogout}>Logout</button></div>
            : null
        }

        {
          user !== null
            ? <UserActive user={user} />
            : ''
        }

      </nav>

    </header>
  )
}
