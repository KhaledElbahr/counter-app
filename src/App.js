import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AppRouter from './Router.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
