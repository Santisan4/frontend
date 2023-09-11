import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import userService from '../../services/user.ts'
import adminService from '../../services/admin.ts'
import { useUser } from '../../hooks/useUser.tsx'

import './styles.css'

export function Login (): JSX.Element {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)
  const navigate = useNavigate()
  const { setUser } = useUser()

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    userService.login({ email, password })
      .then(user => {
        setUser(user)
        userService.setToken(user.token)
        adminService.setToken(user.token)
        // redirect to home
        navigate('/')
        // save in local storage
        window.localStorage.setItem('user', JSON.stringify(user))
        // clear form
        setEmail('')
        setPassword('')
      })
      .catch(err => {
        console.log(err.response.data.error)
        setMessage(err.response.data.error)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
  }

  return (
    <div className='login-container'>

      <h1>Bienvenido de nuevo!</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Correo electrónico</label>
        <input type='text' id='email' name='email' value={email} onChange={handleChangeEmail} placeholder='Ej. : email@email.com' required />

        <label htmlFor='password'>Contraseña</label>
        <input type='password' id='password' name='password' value={password} onChange={handleChangePassword} required />

        <button type='submit'>Ingresar</button>
        {message ?? <p className='error-message'>{message}</p>}
      </form>

      <p className='signup-link'>
        No tienes cuenta?
        <Link to='/user/register'> Crear cuenta </Link>
      </p>
      <div className='divider'>o</div>

      <button className='app-register-button'>
        <span className='icon-app'>
          <img src='/go.png' alt='Google Icon' />
        </span>
        Ingresar con Google
      </button>

      <button className='app-register-button'>
        <span className='icon-app'>
          <img src='/fb.png' alt='facebook Icon' />
        </span>
        Ingresar con Facebook
      </button>

    </div>
  )
}
