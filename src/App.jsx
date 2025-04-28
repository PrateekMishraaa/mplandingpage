import React from 'react'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from './Pages/Home'
import Experience from './Pages/Experience'
const App = () => {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/experience" element={<Experience/>}/>
    </Routes>
   </Router>
   </>
  )
}

export default App
