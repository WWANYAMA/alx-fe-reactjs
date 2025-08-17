// src/components/HomePage.jsx
import { useState, useEffect } from 'react';
import recipeData from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Simulate loading data (in a real app, you might fetch from an API)
    setRecipes(recipeData);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Delicious Recipes</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02]">
      <img 
        src={recipe.image} 
        alt={recipe.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">{recipe.title}</h2>
        <p className="text-gray-600 mb-4">{recipe.summary}</p>
        <a 
          href={`/recipe/${recipe.id}`}
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
        >
          View Recipe
        </a>
      </div>
    </div>
  );
};

export default HomePage;