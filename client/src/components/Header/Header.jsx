import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import { GiExplodingPlanet } from "react-icons/gi"

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
    <header>
      <div></div>
      <div id='logoContainer divSize'>
        <GiExplodingPlanet size={60} className='logo planet' id='planet'/> 
        <h1 className='logo' id='byte'>ByteBurst</h1>
      </div>

      <NavBar className='NavBar'/>
    </header>
  )
}

export default Header