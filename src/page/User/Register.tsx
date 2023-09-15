import { Link, useNavigate } from 'react-router-dom'
import './styles.css'
import { useId, useState } from 'react'
import userService from '../../services/user.ts'

export function Register (): JSX.Element {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()

  const inputNameId = useId()
  const inputEmailId = useId()
  const inputPasswordId = useId()

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value)
  }

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    userService
      .create({ name, email, password })
      .then((user) => {
        console.log(user)
        // redirect to home
        navigate('/user/login')
        setName('')
        setEmail('')
        setPassword('')
      })
      .catch((err) => {
        setErrorMessage(err.response.data.error)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
  }

  return (
    <div className='signup-container'>
      <h1 className='title-form-user'>Nueva cuenta</h1>

      <form className='form' onSubmit={handleSubmit}>
        <label className='label-form' htmlFor={inputNameId}>
          Nombre
        </label>
        <input
          autoFocus
          className='input-form'
          type='text'
          id={inputNameId}
          value={name}
          onChange={handleChangeName}
          name='name'
          placeholder='Ej.Fulanito'
          required
        />

        <label className='label-form' htmlFor={inputEmailId}>
          Correo electrónico
        </label>
        <input
          className='input-form'
          type='email'
          value={email}
          id={inputEmailId}
          name='email'
          placeholder='Ej.: email@email.com'
          onChange={handleChangeEmail}
          required
        />
        <label className='label-form' htmlFor={inputPasswordId}>
          Contraseña
        </label>
        <input
          className='input-form'
          type='password'
          id={inputPasswordId}
          value={password}
          onChange={handleChangePassword}
          name='password'
          required
        />

        <button className='button-user' type='submit'>
          Registrarse
        </button>
        {errorMessage ?? <p className='error-message'>{errorMessage}</p>}
      </form>

      <p className='login-link'>
        Ya tienes cuenta? <Link to='/user/login'>Ingresa</Link>
      </p>
      <div className='divider'>o</div>

      <button className='app-register-button'>
        <span className='icon-app'>
          <img className='icon-form-user' src='/go.png' alt='Google Icon' />
        </span>
        Registrate con Google
      </button>
    </div>
  )
}
