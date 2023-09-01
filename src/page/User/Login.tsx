import { Link, useNavigate } from 'react-router-dom'
import './styles.css'
import { useState } from 'react'
import userService from '../../services/user.ts'
import productService from '../../services/adminProduct.ts'
import { useUser } from '../../hooks/useUser.tsx'

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
        productService.setToken(user.token)
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

      <h1>Welcome Back!</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input type='text' id='email' name='email' value={email} onChange={handleChangeEmail} placeholder='Enter your email' required />

        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' value={password} onChange={handleChangePassword} placeholder='Enter your password' required />

        <button type='submit'>Log In</button>
        {message ?? <p className='error-message'>{message}</p>}
      </form>

      <p className='signup-link'>
        Do not have an account?
        <Link to='/user/register'> Sign Up</Link>
      </p>
      <div className='divider'>or</div>

      <button className='app-register-button'>
        <span className='icon-app'>
          <img src='/go.png' alt='Google Icon' />
        </span>
        Sign In with Google
      </button>

      <button className='app-register-button'>
        <span className='icon-app'>
          <img src='/fb.png' alt='facebook Icon' />
        </span>
        Sign In with Facebook
      </button>

    </div>
  )
}
