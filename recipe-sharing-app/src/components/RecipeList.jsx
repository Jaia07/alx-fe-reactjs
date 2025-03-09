import React from "react";
import {useRecipeStore} from "./recipeStore";
import { useState } from "react";
import { Link } from 'react-router-dom'

const RecipeList = () => {
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
    const [selectedRecipeId, setSelectedRecipeId] = useState(null);


    return (
      <div>
        {filteredRecipes.map(recipe => (
          <div key={recipe.id} onClick={() => setSelectedRecipeId(selectedRecipeId === recipe.id ? null : recipe.id)}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
        {selectedRecipeId && <RecipeDetails recipeId={selectedRecipeId} />}
      </div>
    );
  }
export default RecipeList;