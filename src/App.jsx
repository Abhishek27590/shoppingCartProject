import React from 'react'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Crt from './pages/Crt'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Crt/>}/>
      </Routes>
    </div>
  )
}

export default App