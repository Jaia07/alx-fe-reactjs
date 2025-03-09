import React from "react";
import { useRecipeStore } from "./recipeStore";
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
    const navigate = useNavigate();

    const handleClick = () => {
        deleteRecipe({ recipeId });
        navigate('/');
    }

    return (
        <button onClick={ handleClick }>Delete Recipe</button>
    );

};

export default DeleteRecipeButton