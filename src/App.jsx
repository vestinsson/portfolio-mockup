import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
        <Route path="/" element={<Home />} />
            <Route path="/portfolio-mockup" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      </div>
      </Router>
    </>
  );
}

export default App;
