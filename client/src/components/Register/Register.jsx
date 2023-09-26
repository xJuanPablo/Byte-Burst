import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function register(e){
    e.preventDefault();
    await fetch('http://localhost:3001/register', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type': 'application/json'},
    })
  }

  return (
    <div className='formBox'>
      <form action="" className='loginForm' onSubmit={register}>
        <h2>Login using your account information</h2>
        <input type="text" placeholder='Username' value={username} onChange={e => setUsername(e.target.value)}/>
        <input type="password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)}/>
        <button id='loginBtn'>Login</button>

        <p>Already have an account? You can login <Link to='/login'>Here</Link></p>
      </form>
      
    </div>
  )
}

export default Register