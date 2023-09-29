import React, {useContext, useState} from 'react';
import { Link, Navigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [toHome, setToHome] =  useState(false);
  const {setUserInfo} = useContext(UserContext)


  async function login(e) {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
    });
    if (response.ok){
      response.json().then(userInfo =>{
        setUserInfo(userInfo)
        setToHome(true);
      });
    } else {
      alert('Invalid username or password')
    }
  }

  if (toHome) {
    return <Navigate to={'/'} />
  }

  return (
    <div className='formBox'>
      <form action="" className='login' onSubmit={login}>
        <h2>Login using your account information</h2>
        <input type="text" placeholder='Username' value={username} onChange={e => setUsername(e.target.value)}/>
        <input type="password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)}/>
        <button id='loginBtn'>Login</button>

        <p>Don't have an account? You can register <Link to="/register">Here</Link></p>
      </form>
      
    </div>
  )
}

export default Login;