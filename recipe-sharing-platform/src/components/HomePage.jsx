import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


const Homepage = () => {
    const [ recipes, setRecipes ] = useState([]);

    useEffect(() => {
        async function fetchRecipes() {
          try {
            const response = await fetch('http://localhost:3000/recipes');
            const data = await response.json();
            setRecipes(data);
          } catch (error) {
            console.error('Error fetching recipes:', error);
          }
        }
    
        fetchRecipes();
      }, []);
    
      return (
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-6">Recipe Sharing Platform</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {recipes.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover:scale-105"
              >
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                  <p className="text-gray-600">{recipe.summary}</p>
                  <Link to={`/recipe/${recipe.id}`} className="mt-4 inline-block text-blue-500 hover:underline">
                    View Recipe
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}


export default Homepage;
