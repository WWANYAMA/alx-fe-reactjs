// src/components/RecipeDetail.jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipeData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    const foundRecipe = recipeData.find(r => r.id === parseInt(id));
    setRecipe(foundRecipe);
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (!recipe) {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold mb-4">Recipe not found</h2>
        <Link 
          to="/" 
          className="text-blue-500 hover:text-blue-700 underline"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  // Mock ingredients and instructions
  const recipeDetails = {
    1: {
      ingredients: [
        "400g spaghetti",
        "200g pancetta or guanciale, diced",
        "4 large eggs",
        "50g pecorino cheese, grated",
        "50g parmesan, grated",
        "Freshly ground black pepper",
        "Salt"
      ],
      instructions: [
        "Bring a large pot of salted water to boil and cook spaghetti until al dente.",
        "While pasta cooks, fry pancetta until crispy.",
        "Whisk eggs and cheeses together in a bowl.",
        "Drain pasta, reserving some cooking water.",
        "Immediately toss hot pasta with pancetta, then quickly mix in egg mixture.",
        "Add pasta water as needed to create a creamy sauce.",
        "Season with black pepper and serve immediately."
      ],
      cookTime: "20 mins",
      servings: 4
    },
    2: {
      ingredients: [
        "500g chicken breast, cubed",
        "150g yogurt",
        "2 tbsp lemon juice",
        "2 tsp garam masala",
        "1 tsp turmeric",
        "3 tbsp vegetable oil",
        "1 onion, finely chopped",
        "3 garlic cloves, crushed",
        "1 tbsp ginger, grated",
        "400g canned tomatoes",
        "1 tbsp tomato paste",
        "1 tsp chili powder",
        "150ml heavy cream",
        "Fresh coriander for garnish"
      ],
      instructions: [
        "Marinate chicken in yogurt, lemon juice, 1 tsp garam masala, and turmeric for 1 hour.",
        "Grill or bake chicken until slightly charred but not fully cooked.",
        "Heat oil in a pan and cook onions until golden.",
        "Add garlic, ginger and cook for 1 minute.",
        "Add tomatoes, tomato paste, chili powder and remaining garam masala.",
        "Simmer for 15 minutes until thickened, then blend until smooth.",
        "Return sauce to pan, add chicken and cream, simmer for 10 minutes.",
        "Garnish with coriander and serve with rice or naan."
      ],
      cookTime: "45 mins",
      servings: 4
    }
  };

  const details = recipeDetails[recipe.id] || {
    ingredients: ["Ingredient 1", "Ingredient 2"],
    instructions: ["Step 1", "Step 2"],
    cookTime: "30 mins",
    servings: 2
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link 
        to="/" 
        className="inline-flex items-center text-blue-500 hover:text-blue-700 mb-6"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Recipes
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-64 md:h-80 object-cover"
        />

        <div className="p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{recipe.title}</h1>
          <p className="text-gray-600 mb-6">{recipe.summary}</p>

          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">{details.cookTime}</span>
            </div>
            <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span className="text-gray-700">{details.servings} servings</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Ingredients</h2>
              <ul className="space-y-2">
                {details.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-5 h-5 bg-blue-100 text-blue-600 rounded-full mr-3 mt-1 flex-shrink-0 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-700">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Instructions</h2>
              <ol className="space-y-4">
                {details.instructions.map((step, index) => (
                  <li key={index} className="flex">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-500 text-white rounded-full mr-3 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;