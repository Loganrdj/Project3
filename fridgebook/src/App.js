import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav"
import Home from "./components/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home}/>
            {/* <Route exact path="/resume" component={Resume}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/contact" component={Contact}/> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
