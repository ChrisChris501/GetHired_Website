import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Nav from './Components/nav';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Application from './Pages/Application';
import SignUp from './Pages/SignUp';
import Success from './Pages/Success';
import JobLists from './Pages/JobLists';
import JobAlerts from './Pages/JobAlerts';
import SignIn from './Pages/SignIn';
import JobApplication from './Pages/JobApplication';

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
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/JobAlerts" element={<JobAlerts />} />
          <Route path="/Success" element={<Success />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/JobApplication" element={<JobApplication />} />
          </Routes>
       <Footer />
    </div>
      </Router>
  );
}

export default App; 
