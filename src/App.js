import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Router>
      <div className="min-h-screen bg-dark text-cream">
        <Navbar open={menuOpen} setOpen={setMenuOpen} />
        <div className={menuOpen ? 'block' : 'hidden'}>
          <nav className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-8 z-40">
            <Link to="/" className="text-2xl text-cream" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" className="text-2xl text-cream" onClick={() => setMenuOpen(false)}>About Us</Link>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;