import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import EditRecipeForm from './components/EditRecipeForm'
import DeleteRecipeButton from './components/DeleteRecipeButton'

function App() {

  return (
    <>
      <RecipeList />
      <AddRecipeForm />
      <RecipeDetails />
      {/* <EditRecipeForm /> */}
      <DeleteRecipeButton />
      
    </>
  )
}

export default App
