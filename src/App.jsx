import React from 'react'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from './Pages/Home'
import Experience from './Pages/Experience'
import Blogs from './Pages/Blogs'
const App = () => {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/experience" element={<Experience/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
    </Routes>
   </Router>
   </>
  )
}

export default App
