import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Application from './Pages/Application';
import Resume from './Pages/JobLists';
import Contact from './Pages/JobAlerts';
import JobLists from './Pages/JobLists';
import JobAlerts from './Pages/JobAlerts';
//import Home from './Components/Home/Home';

function App() {
  return (
      <Router>
    <div className="App">
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/JobLists" element={<JobLists />} />
          <Route path="/Application" element={<Application />} />
          <Route path="/JobAlerts" element={<JobAlerts />} />
          </Routes>
       <Footer />
    </div>
      </Router>
  );
}

export default App; 