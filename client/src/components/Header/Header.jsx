import React, {useContext} from 'react'
import NavBar from './components/NavBar'
import { ThemeContext } from '../../App'
import { GiExplodingPlanet } from "react-icons/gi"
import {BsFillCloudSunFill, BsFillMoonFill} from "react-icons/bs"

function Header() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <div id='logoContainer divSize'>
        <GiExplodingPlanet size={60} className='logo' id='planet'/> 
        <h1 className='logo' id='byte'>ByteBurst</h1>
      </div>

      <div className='NavBar'>
      <NavBar/>
      </div>
      <div className='toggle'>
      <button onClick={toggleTheme}>
        {theme === 'dark' ? <BsFillCloudSunFill size={35} /> : <BsFillMoonFill size={35} />}
      </button>
      </div>
    </header>
  )
}

export default Header