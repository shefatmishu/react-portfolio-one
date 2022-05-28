import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
function App() {
  return (
    <div className="App">
      <h1>test</h1>
      <HomePage
        title="props title"
      ></HomePage>
      <AboutUs shehza="props Shehza"></AboutUs>
    </div>
  );
}


export default App;
