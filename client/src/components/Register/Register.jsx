import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function register(e){
    e.preventDefault();
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type': 'application/json'},
    });
    if (response.status === 200){
      alert('Registration Successful!')
    } else {
      alert('Registration Failed. Please Try Again')
    }
  }

  return (
    <div className='formBox'>
      <form action="" className='registerForm' onSubmit={register}>
        <h2>It's Great To Meet You! Sign Up Here!</h2>
        <input type="text" placeholder='Username' value={username} onChange={e => setUsername(e.target.value)}/>
        <input type="password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)}/>
        <button id='registerBtn'>Register</button>

        <p>Already have an account? You can login <Link to='/login'>Here</Link></p>
      </form>
      
    </div>
  )
}

export default Register