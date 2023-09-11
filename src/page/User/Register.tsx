import { Link, useNavigate } from 'react-router-dom'
import './styles.css'
import { useState } from 'react'
import userService from '../../services/user.ts'

export function Register (): JSX.Element {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value)
  }

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    userService.create({ name, email, password })
      .then(user => {
        console.log(user)
        // redirect to home
        navigate('/user/login')
        setName('')
        setEmail('')
        setPassword('')
      })
      .catch(err => {
        setErrorMessage(err.response.data.error)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
  }

  return (
    <div className='signup-container'>
      <h1>Nueva cuenta</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Nombre</label>
        <input type='text' id='username' value={name} onChange={handleChangeName} name='name' placeholder='Ej.Fulanito' required />

        <label htmlFor='email'>Correo electrónico</label>
        <input
          type='email' value={email} id='email' name='email'
          placeholder='Ej.: email@email.com' onChange={handleChangeEmail} required
        />
        <label htmlFor='password'>Contraseña</label>
        <input type='password' id='password' value={password} onChange={handleChangePassword} name='password' required />

        <button type='submit'>Registrarse</button>
        {errorMessage ?? <p className='error-message'>{errorMessage}</p>}
      </form>

      <p className='login-link'>Ya tienes cuenta? <Link to='/user/login'>Ingresa</Link></p>
      <div className='divider'>o</div>

      <button className='app-register-button'>
        <span className='icon-app'>
          <img src='/go.png' alt='Google Icon' />
        </span>
        Registrate con Google
      </button>

      <button className='app-register-button'>
        <span className='icon-app'>
          <img src='/fb.png' alt='facebook Icon' />
        </span>
        Registrate con Facebook
      </button>

    </div>
  )
}
