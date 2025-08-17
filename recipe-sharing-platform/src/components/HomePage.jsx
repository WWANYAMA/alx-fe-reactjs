import { Link } from 'react-router-dom';

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
        <Link
          to={`/recipe/${recipe.id}`}
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
};