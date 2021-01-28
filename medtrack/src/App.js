import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AddMed from "pages/add-med";
import ListMed from "pages/list-med";
import MedicationInfo from "pages/medication-info";
import MedicationPop from "pages/medication-popup";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/add-med">
            <AddMed />
          </Route>
          <Route path="/list-med">
            <ListMed />
          </Route>
          <Route path="/medication-info">
            <MedicationInfo />
          </Route>
          <Route path="/medication-popup">
            <MedicationPop />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
