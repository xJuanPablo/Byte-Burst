import React from 'react'
import Toggle from './Toggle'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav id='NavBar'>
      <ul>
      <Link className='navLinks' to='/'> Home </Link>
        <li className='navLinks'> <a href="google.com">ByteWrite</a> </li>
        <Link className='navLinks' to='/login'> Login </Link>
        <li><button><Toggle /></button></li>
      </ul>
    </nav>
  )
}

export default NavBar