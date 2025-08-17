import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipePage from './pages/AddRecipePage';
import HomePage from './pages/HomePage'; // 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-recipe" element={<AddRecipePage />} />
      </Routes>
    </Router>
  );
}

export default App;


