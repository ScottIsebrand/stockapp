import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Stock from './components/Stock';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stocks" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/stock/:symbol" element={<Stock />} />
      </Routes>
    </div>
  );
}

export default App;
