import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import AllRoutes from './AllRoutes';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <AllRoutes></AllRoutes>
      </Router>
    </div>
  );
}

export default App;
