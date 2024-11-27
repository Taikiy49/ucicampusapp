import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Events from './Events';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}
export default App;
