import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import { GiExplodingPlanet } from "react-icons/gi";
import { Link } from 'react-router-dom';

function Header() {

  const [username, setUsername] = useState(null)

  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(json => {

      })
    })

  }, []);
  return (
    <>
    <header>
      <div></div>
      <Link id='logoContainer divSize'  to={'/'}>
        <GiExplodingPlanet size={60} className='logo planet' id='planet'/> 
        <h1 className='logo' id='byte'>ByteBurst</h1>
      </Link>

      <NavBar className='NavBar'/>
    </header>
      <hr className='horizontal-line'/>
    </>
  )
}

export default Header