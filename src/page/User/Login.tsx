import { Link } from 'react-router-dom'
import './styles.css'

export function Login (): JSX.Element {
  return (
    <div className='login-container'>

      <h1>Welcome Back!</h1>

      <form>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' name='username' placeholder='Enter your username' required />

        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' placeholder='Enter your password' required />

        <button type='submit'>Log In</button>
      </form>

      <p className='signup-link'>
        Don't have an account?
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
