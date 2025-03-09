import React from "react";
import {useRecipeStore} from "./recipeStore";
import { useState } from "react";

const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);
    const [selectedRecipeId, setSelectedRecipeId] = useState(null);


    return (
      <div>
        {recipes.map(recipe => (
          <div key={recipe.id} onClick={() => setSelectedRecipeId(recipe.id)}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
        {selectedRecipeId && <RecipeDetails recipeId={selectedRecipeId}/>}
      </div>
    );
  }
export default RecipeList;