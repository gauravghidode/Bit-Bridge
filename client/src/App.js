import {BrowserRouter as Router} from 'react-router-dom';
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import AllRoutes from './AllRoutes';

import { fetchAllQuestions } from './actions/question';

function App() {

  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(fetchAllQuestions())
  },[dispatch])

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
