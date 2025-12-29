
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/blog/Home'
import Register from './Pages/auth/Register'
import Login from './Pages/auth/Login'
import AddBlog from './Pages/blog/AddBlog'
import EditBlog from './Pages/blog/Editblog'
import SingleBlog from './Pages/blog/SingleBlog'
function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/blog/add' element={<AddBlog />}/>
        <Route path='/blog/edit' element={<EditBlog />}/>
        <Route path='/blog/:id' element={<SingleBlog />}/>


        
      </Routes>
    </BrowserRouter>
  )
}

export default App
