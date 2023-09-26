import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='formBox'>
      <form action="" className='loginForm'>
        <h2>Login using your account information</h2>
        <input type="text" placeholder='Username'/>
        <input type="password" placeholder='password'/>
        <button id='loginBtn'>Login</button>

        <p>Don't have an account? You can register <Link to="/register">Here</Link></p>
      </form>
      
    </div>
  )
}

export default Login