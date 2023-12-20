
import React from 'react'
import './App.css'
import Navbar from './componets/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { Services } from './pages/Services'
import { AboutUs } from './pages/AboutUs'
import { ContactUs } from './pages/ContactUs'
import { Footer } from './componets/Footer'




function App() {
  

  return (
    <>
      
      
      <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/services' element={<Services/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
      </Routes>
      <Footer />
      </div>
      
    </>
  )
}

export default App
