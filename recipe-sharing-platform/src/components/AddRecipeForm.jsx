import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!title.trim()) validationErrors.title = 'Title is required';
    if (!ingredients.trim() || ingredients.split(',').length < 2) {
      validationErrors.ingredients = 'Please list at least two ingredients, separated by commas';
    }
    if (!steps.trim()) validationErrors.steps = 'Preparation steps are required';

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const newRecipe = { title, ingredients, steps };
      console.log('Submitted Recipe:', newRecipe);

      // Reset form
      setTitle('');
      setIngredients('');
      setSteps('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded shadow-md space-y-6">
      <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>

      <div>
        <label className="block mb-1 font-medium">Recipe Title</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
      </div>

      <div>
        <label className="block mb-1 font-medium">Ingredients (comma-separated)</label>
        <textarea
          className="w-full border border-gray-300 rounded px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
      </div>

      <div>
        <label className="block mb-1 font-medium">Preparation Steps</label>
        <textarea
          className="w-full border border-gray-300 rounded px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />
        {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white font-semibold px-6 py-2 rounded hover:bg-blue-600 transition"
      >
        Submit Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
