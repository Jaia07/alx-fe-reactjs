import React from "react";
import {useRecipeStore} from "./recipeStore";
import { useState } from "react";
import { Link } from 'react-router-dom'

const RecipeList = () => {
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
    const [selectedRecipeId, setSelectedRecipeId] = useState(null);
    const addFavorite = useRecipeStore(state => state.addFavorite);
    const removeFavorite = useRecipeStore(state => state.removeFavorite);
    const favorites = useRecipeStore(state => state.favorites);


    return (
      <div>
        {filteredRecipes.map(recipe => (
          <div key={recipe.id} onClick={() => setSelectedRecipeId(selectedRecipeId === recipe.id ? null : recipe.id)}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => favorites.includes(recipe.id) ? removeFavorite(recipe.id) : addFavorite(recipe.id)}>{favorites.includes(recipe.id) ? "Remove Favorite" : "Add Favorite"}</button>
          </div>
        ))}
        {selectedRecipeId && <RecipeDetails recipeId={selectedRecipeId} />}
      </div>
    );
  }
export default RecipeList;