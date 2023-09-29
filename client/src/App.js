import './App.css';
import {Routes, Route} from "react-router-dom"
import Layout from './Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import IndexPage from './pages/IndexPage';
import ByteWrite from './pages/ByteWritePage';
import { UserContextProvider } from './context/UserContext';
import PostPage from './pages/PostPage';
import EditPostPage from './pages/EditPostPage';


function App() {


  
  return (

    
    
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<IndexPage/>} />
            <Route path={'/login'} element={<Login />} />
            <Route path={'/register'} element={<Register />} />
            <Route path={'/bytewrite'} element={<ByteWrite />} />
            <Route path="/post/:id" element={<PostPage />}/>
            <Route path="/edit/:id" element={<EditPostPage />}/>
            </Route>
        </Routes>
      </UserContextProvider>
  );
}

export default App;
