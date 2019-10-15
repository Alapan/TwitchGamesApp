import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Game from './Game';
import Stream from './Stream';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path='/' component={Game} />
        <Route path='/stream/:id/:name' component={Stream} />
      </Router>
    </div>
  );
}

export default App;
