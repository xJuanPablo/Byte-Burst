import React, {createContext, useState} from 'react'

export const ThemeContext = createContext(null);

export function ThemeContextProvider({ children }) {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className={`App ${theme}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}
