import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import BannerTime from "comps/BannerTime";
import FilterBy from "comps/FilterBy";
import Title from "comps/Title";
import MedInfoBox from "comps/MedInfoBox";
import Button from "comps/Button";

import AddMed from "pages/add-med";
import ListMed from "pages/list-med";
import MedicationInfo from "pages/medication-info";
import MedicationPop from "pages/medication-popup";
// import AddMedInfo from "pages/add-med-info";
// import AddMedDosage from "pages/add-med-dosage";
// import AddMedFreq from "pages/add-med-frequency";
// import SpecificDays from "pages/specific-days";

// import SpecificTimes from "pages/specific-times";
// import SpecificIns from "pages/specific-instructions";
// import SpecificDos from "pages/specific-dosage";
// import SpecificAppear from "pages/specific-appearance";
// import SpecificOverview from "pages/specific-overview";
import FilterPage from "pages/Filter";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/add-med">
            <AddMed />
          </Route>
          <Route path="/Filter">
            <FilterPage />
          </Route>
          <Route path="/list-med">
            <ListMed />
          </Route>
          <Route exact path="/">
            <div className="page">
              <BannerTime />
              <Link to="/Filter">
                <FilterBy />
              </Link>
              <Title />
              <MedInfoBox />
              <MedInfoBox />
              <Link to="/add-med">
                <Button text="+ Add Med" />
              </Link>
              <Link to="/list-med">
                <Button text="See All Meds" bgcolor={"#63AAC8"} />
              </Link>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
