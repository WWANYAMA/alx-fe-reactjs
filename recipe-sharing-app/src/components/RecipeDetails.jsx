import { useParams } from 'react-router-dom';
<<<<<<< HEAD
import { useRecipeStore } from '../store/recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import FavoriteToggleButton from './FavoriteToggleButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = parseInt(id, 10);
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
=======
import { useRecipeStore } from '../recipeStore';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === parseInt(id))
>>>>>>> 7816280772fd4f217e5b8897efdbb90bca864654
  );

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
<<<<<<< HEAD
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <FavoriteToggleButton recipeId={recipe.id} />
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton id={recipe.id} />
=======
      <h1>{recipe.id}</h1>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
>>>>>>> 7816280772fd4f217e5b8897efdbb90bca864654
    </div>
  );
};

<<<<<<< HEAD
export default RecipeDetails;
=======
export default RecipeDetail;
>>>>>>> 7816280772fd4f217e5b8897efdbb90bca864654
