import './App.css';
import { createContext, useState } from 'react';
import {Routes, Route} from "react-router-dom"
import Header from './components/Header/Header';
import Post from './components/Post';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
}
  return (

    
    

      <Routes>

        <Route index element={
    <ThemeContext.Provider value={{theme, toggleTheme}} >
      <div className={`App ${theme}`}>
        <Header />
        <Post />
      </div>
    </ThemeContext.Provider>
        } />

        <Route path={'/login'} element={

          <div></div>


        }>


        </Route>
      </Routes>



  );
}

export default App;
