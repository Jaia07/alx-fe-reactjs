import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import EditRecipeForm from './components/EditRecipeForm'
import DeleteRecipeButton from './components/DeleteRecipeButton'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {

  return (
    <>
      <Router>
        <div>
          <h1>Recipe Sharing App</h1>
          <AddRecipeForm />
          <SearchBar />
          <FavoritesList />
          <RecommendationsList />
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
          </Routes>
        </div>
      </Router>
      
    </>
  )
}

export default App
