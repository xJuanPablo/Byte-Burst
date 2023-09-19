import './App.css';
import Header from './components/Header/Header';
import { createContext, useState } from 'react';
import Post from './components/Post';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
}
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}} >

    <div className={`App ${theme}`}>
      <Header />
    </div>

    <Post />

    </ThemeContext.Provider>


  );
}

export default App;
