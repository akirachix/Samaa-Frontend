import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationLinks from './Navbar';
import LandingPage from './LandingPage';
import DataTable from './Reports';



function App() {
  return (
    <Router>
      <div>
        <NavigationLinks /> 
        <Routes>
          <Route path="/LandingPage" element={<LandingPage/>} />
          <Route path="/Reports" element={<DataTable/>} />

          
          </Routes>
      </div>
    </Router>
  );
}

export default App;
