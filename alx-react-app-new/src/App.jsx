import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';  // ✅ import your new component
import Counter from './components/Counter'; // ✅ import the Counter component

function App() {
  
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      <Footer />
    
    </div>
  );
}

export default App;
