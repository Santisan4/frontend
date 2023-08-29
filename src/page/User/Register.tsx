import { Link } from 'react-router-dom'
import './styles.css'

export function Register (): JSX.Element {
  return (
    <div className='signup-container'>
      <h1>Create an Account</h1>

      <form>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' name='username' placeholder='Choose a username' required />

        <label htmlFor='email'>Email</label>
        <input
          type='email' id='email' name='email'
          placeholder='Enter your email' required
        />
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' placeholder='Choose a password' required />

        <button type='submit'>Sign Up</button>
      </form>

      <p className='login-link'>Already have an account? <Link to='/user/login'>Log In</Link></p>
      <div className='divider'>or</div>

      <button className='app-register-button'>
        <span className='icon-app'>
          <img src='/go.png' alt='Google Icon' />
        </span>
        Register with Google
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
