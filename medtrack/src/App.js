import './App.scss';
import React from 'react';
import {  
  BrowserRouter as Router,
  Switch,
  Route,
Link } from "react-router-dom";

import AddMed from "pages/add-med";
import Home from "pages/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/add-med">
            <AddMed />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
