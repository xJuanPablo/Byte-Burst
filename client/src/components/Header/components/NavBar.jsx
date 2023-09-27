import React, { useContext, useEffect} from 'react'
import Toggle from './Toggle'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../context/UserContext';

function NavBar() {
  const {setUserInfo, userInfo} = useContext(UserContext)

  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(json => {
        setUserInfo(userInfo)
      })
    })
  }, []);

  function logout(){
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <nav id='NavBar'>
      <ul>
        <Link className='navLinks' to='/'> Home </Link>
        {username && (
          <>
            <Link className='navLinks' to='/bytewrite'> ByteWrite</Link>
            <a onClick={logout} className='navLinks'>Logout</a>
          </>
        )}
        {!username && (
          <>
            <Link className='navLinks' to='/login'> Login </Link>
            <Link className='navLinks' to='/register'>Register</Link>
          </>
        )}
        <Toggle />
      </ul>
    </nav>
  )
}

export default NavBar