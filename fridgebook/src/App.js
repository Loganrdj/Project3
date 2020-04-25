import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/pages/Home';

function App() {
  return (

    <Router>
      <div>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/:user" component={Home} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
