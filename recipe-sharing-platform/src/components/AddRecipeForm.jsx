import React, { useState } from 'react';
import data from '../data.json'

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validate = () => {
        let formErrors = {};

        if (!title.trim()) {
        formErrors.title = 'Title is required';
        }
        if (!ingredients.trim()) {
        formErrors.ingredients = 'Ingredients are required';
        }
        if (!steps.trim()) {
        formErrors.instructions = 'Instructions are required';
        }

        if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
        return;
        }
    }

    if (validate()) {
        // Implement form submission logic here
        console.log({ title, ingredients, instructions });
  
        // Clear the form after submission
        setTitle('');
        setIngredients('');
        setInstructions('');
        setErrors({}); // Clear errors after successful submission
      }
    };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Add New Recipe</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${errors.title ? 'border-red-500' : ''}`}
          />
          {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
        </div>
        <div>
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
            Ingredients
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${errors.ingredients ? 'border-red-500' : ''}`}
          />
          {errors.ingredients && <p className="text-red-500 text-xs mt-1">{errors.ingredients}</p>}
        </div>
        <div>
          <label htmlFor="steps" className="block text-sm font-medium text-gray-700">
            Steps
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${errors.instructions ? 'border-red-500' : ''}`}
          />
          {errors.steps && <p className="text-red-500 text-xs mt-1">{errors.steps}</p>}
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;