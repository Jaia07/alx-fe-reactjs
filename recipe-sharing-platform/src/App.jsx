import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/Homepage'
import RecipeDetail from './components/RecipeDetail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddRecipeForm from './components/AddRecipeForm'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
