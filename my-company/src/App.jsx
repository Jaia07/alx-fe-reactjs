import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './components/Contact'
import About from './pages/About'

function App() {

  return (

      <div>
        <Navbar />
        <Footer />

        <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/about' element= {<About />} />
          <Route path='/services' element= {<Services />} />
          <Route path='/contact' element= {<Contact />} />
        </Routes>
      </div>  
  )
}

export default App
