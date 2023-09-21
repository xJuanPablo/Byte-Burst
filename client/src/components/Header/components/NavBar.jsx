import React from 'react'
import Toggle from './Toggle'

function NavBar() {
  return (
    <nav id='NavBar'>
      <ul>
        <li className='navLinks'> <a href="google.com">Home</a> </li>
        <li className='navLinks'> <a href="google.com">ByteWrite</a> </li>
        <li className='navLinks'> <a href="/login">Login</a> </li>
        <li><button><Toggle /></button></li>
      </ul>
    </nav>
  )
}

export default NavBar