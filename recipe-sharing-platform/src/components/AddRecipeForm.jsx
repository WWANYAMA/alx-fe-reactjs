import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});
  const validate = () => {
    const validationErrors = {};

    if (!title.trim()) {
      validationErrors.title = 'Title is required';
    }

    const ingredientsArray = ingredients.split(',').map(item => item.trim()).filter(Boolean);
    if (ingredientsArray.length < 2) {
      validationErrors.ingredients = 'Please list at least two ingredients, separated by commas';
    }

    if (!steps.trim()) {
      validationErrors.steps = 'Preparation steps are required';
    }

    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(); // ✅ Call validate here
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const newRecipe = { title, ingredients, steps };
      console.log('Recipe submitted:', newRecipe);

      // Reset form
      setTitle('');
      setIngredients('');
      setSteps('');
    }
  };

  return (
    <form
  onSubmit={handleSubmit}
  className="w-full max-w-xl mx-auto p-4 md:p-8 bg-white rounded shadow space-y-6"
>

      <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>

      <div>
        <label className="block font-medium mb-1">Recipe Title</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded px-4 py-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
      </div>

      <div>
        <label className="block font-medium mb-1">Ingredients (comma-separated)</label>
        <textarea
          className="w-full border border-gray-300 rounded px-4 py-2 h-24"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
      </div>

      <div>
        <label className="block font-medium mb-1">Preparation Steps</label>
        <textarea
          className="w-full border border-gray-300 rounded px-4 py-2 h-32"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />
        {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
      >
        Submit Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;

