import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AddMed from "pages/add-med";
import ListMed from "pages/list-med";
import MedicationInfo from "pages/medication-info";
import MedicationPop from "pages/medication-popup";
import AddMedInfo from "pages/add-med-info";
import AddMedDosage from "pages/add-med-dosage";
import AddMedFreq from "pages/add-med-frequency";
import SpecificDays from "pages/specific-days";

import SpecificTimes from "pages/specific-times";
import SpecificIns from "pages/specific-instructions";
import SpecificDos from "pages/specific-dosage";
import SpecificAppear from "pages/specific-appearance";
import SpecificOverview from "pages/specific-overview";


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
          <Route path="/specific-appearance">
            <SpecificAppear />
          </Route>
          <Route path="/specific-overview">
            <SpecificOverview />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
