
import Home from './Components/Home'
import Cart from './Components/Cart'
import Navbar from './Components/Navbar'
// import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Buy from './Components/Buy'


const App = () => {
  return (
    <div className="bg-[#ffffff] min-h-[100vh]">
       <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path ={'/'} element={<Home />} ></Route>
        <Route path ={'/card'} element={<Cart />} ></Route>
        <Route path ={'/card/:id'} element={<Buy />} ></Route>

       </Routes>
       </BrowserRouter>

    </div>
  )
}

export default App
