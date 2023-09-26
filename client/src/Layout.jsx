import React from 'react'
import Header from './components/Header/Header'
import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom'

export const ThemeContext = createContext(null);

function Layout() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}} >
    <div className={`App ${theme}`}>
      <Header />
      <Outlet />
    </div>
  </ThemeContext.Provider>
  )
}

export default Layout