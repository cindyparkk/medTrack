import './App.scss';
import React from 'react';
import {  
  BrowserRouter as Router,
  Switch,
  Route,
Link } from "react-router-dom";

import AddMed from "pages/add-med";
import AddMedInfo from "pages/add-med-info";
import AddMedDosage from "pages/add-med-dosage";
import AddMedFreq from "pages/add-med-frequency";
import SpecificDays from "pages/specific-days";
import SpecificTimes from "pages/specific-times";
import SpecificIns from "pages/specific-instructions";
import SpecificDos from "pages/specific-dosage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/add-med">
            <AddMed />
          </Route>
          <Route path="/add-med-info">
            <AddMedInfo />
          </Route>
          <Route path="/add-med-dosage">
            <AddMedDosage />
          </Route>
          <Route path="/add-med-frequency">
            <AddMedFreq />
          </Route>
          <Route path="/specific-days">
            <SpecificDays />
          </Route>
          <Route path="/specific-times">
            <SpecificTimes />
          </Route>
          <Route path="/specific-instructions">
            <SpecificIns />
          </Route>
          <Route path="/specific-dosage">
            <SpecificDos />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
