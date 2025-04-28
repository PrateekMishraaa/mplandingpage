import React from 'react'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from './Pages/Home'
import Experience from './Pages/Experience'
import Blogs from './Pages/Blogs'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'
const App = () => {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/experience" element={<Experience/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
   </Router>
   </>
  )
}

export default App
