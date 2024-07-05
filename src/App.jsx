import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import './App.css';
import Nav from './Pages/Components/Nav';
import Footer from './Pages/Components/Footer';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';
//import Home from './Components/Home/Home';

function App() {
  return (
      <Router>
    <div className="App">
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Contact" element={<Contact />} />
          </Routes>
       <Footer />
    </div>
      </Router>
  );
}

export default App; 