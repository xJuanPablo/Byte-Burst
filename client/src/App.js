import './App.css';
import {Routes, Route} from "react-router-dom"
import Post from './components/Post';
import Layout from './Layout';
import Login from './components/Login/Login';
import Register from './components/Register/Register';


function App() {


  
  return (

    
    

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Post/>} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/register'} element={<Register />} />
        </Route>
      </Routes>
  );
}

export default App;
