import { Link } from 'react-router-dom'
import { Cart, CloseIcon, HomeIcon, IconProducts, Logo, MenuMobile, SettingIcon, User } from './Icons.tsx'
import { useState } from 'react'

export function Header (): JSX.Element {
  const [checked, setChecked] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setChecked(e.target.checked)
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

      <div className='nav'>
        <div className='logo-container'>
          <Logo />
        </div>
        <div className='items-menu'>
          <Link to='/'> <HomeIcon /> Home </Link>
          <Link to='/products'> <IconProducts /> Products </Link>
          <Link to='/user/login'> <User /> User</Link>
          <Link to='/cart'> <Cart /> Cart</Link>
          <Link to='*'> <SettingIcon />  Setting </Link>

        </div>

        <div className='user-active-container'>
          <div className='user'>
            <img src='/rengo2.jpeg' alt='' />
            <div>
              <p>Santiago Sanchez</p>
              <small>sant97@hotmail.com.ar</small>
            </div>
          </div>
        </div>
      </div>

    </header>
  )
}
