import React from 'react';

import { GlobalProvider } from './context/GlobalState';
import Nav from './components/Nav';
import Kitchen from './components/Kitchen';
import Dashboard from './components/Dashboard';
import Final from './components/Final';
// import Calendar from './components/Calendar/Calendar';
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
            <Route exact path="/kitchen" component={Kitchen}/>
            <Route exact path="/recipes" component={Final}/>
            {/* <Route exact path="/calendar" component={Calendar}/> */}
          </Switch>
          
      
    </GlobalProvider>
    </Router>
  );
}


export default App;

