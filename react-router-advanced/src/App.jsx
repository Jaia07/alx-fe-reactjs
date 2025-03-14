import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import BlogPost from './components/BlogPost'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'

function App() {

  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/blog/my-first-post">Blog Post</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/profile/*' element= {<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path='/blog/:id' element= {<BlogPost />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
