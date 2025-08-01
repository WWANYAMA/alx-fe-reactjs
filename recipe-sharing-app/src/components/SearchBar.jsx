import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  
  return (
    <input
      type="text"
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search recipes..."
    />
  );
};

export default SearchBar;