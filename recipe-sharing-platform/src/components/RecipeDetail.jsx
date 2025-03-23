import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      async function fetchRecipe() {
        try {
          const response = await fetch(`http://localhost:3000/recipes/${id}`);
          if (!response.ok) {
            throw new Error('Recipe not found');
          }
          const data = await response.json();
          setRecipe(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }
  
      fetchRecipe();
    }, [id]);
  
    if (loading) {
      return <div className="text-center mt-8">Loading...</div>;
    }
  
    if (error) {
      return <div className="text-center mt-8 text-red-500">{error}</div>;
    }
  
    if (!recipe) {
      return <div className="text-center mt-8">Recipe not found.</div>;
    }
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside">
            {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside">
            {recipe.instructions && recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
  
  export default RecipeDetail;
  