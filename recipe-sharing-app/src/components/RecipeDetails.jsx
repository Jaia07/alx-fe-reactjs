// RecipeDetails component
// import React from 'react';
// import DeleteRecipeButton from './DeleteRecipeButton';
// import EditRecipeForm from './EditRecipeForm';
// import { useRecipeStore } from './recipeStore';

// const RecipeDetails = ({ recipeId }) => {
//     const recipe = useRecipeStore((state) => 
//         state.recipes.find((recipe) => recipe.id === recipeId)
//     );


//     return (
//         <div>
//           <h1>{recipe.title}</h1>
//           <p>{recipe.description}</p>
//           {<EditRecipeForm recipe={recipe} />}
//           {<DeleteRecipeButton recipeId={recipe.id} />}
//         </div>
//       );
// }

// export default RecipeDetails;

import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {

    const { recipeId } = useParams();
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === parseInt(recipeId))
  );

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;