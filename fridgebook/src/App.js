import React from 'react';

import { GlobalProvider } from './context/GlobalState';
import Nav from './components/Nav';
import Fridge from './components/Fridge';
import Dashboard from './components/Dashboard';
import Final from './components/Final';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <GlobalProvider>
      
        <Nav />
        <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/fridge" component={Fridge}/>
            <Route exact path="/recipes" component={Final}/>

          </Switch>
          
      
    </GlobalProvider>
    </Router>
  );
}

export default App;

