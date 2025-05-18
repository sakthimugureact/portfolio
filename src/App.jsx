import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Component/Navbars/Header'
import Home from './Pages/Home'
import About from './Pages/About'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App