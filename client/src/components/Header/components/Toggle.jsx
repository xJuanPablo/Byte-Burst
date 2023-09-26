import React, {useContext} from 'react'
import {BsFillCloudSunFill, BsFillMoonFill} from "react-icons/bs"
import { ThemeContext } from '../../../Layout'

function Toggle() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className='toggle'>
    <button onClick={toggleTheme}>
      {theme === 'dark' ? <BsFillCloudSunFill size={35} /> : <BsFillMoonFill size={35} />}
    </button>
    </div>
  )
}

export default Toggle