import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home/Home';

function App() {
  return (
    <div className='app'>
      <Home />
    </div>
  );
}

export default App;
