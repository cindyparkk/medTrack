import React, {useState, useEffect} from 'react';
import BannerCancel from "comps/BannerCancel";
import Options from "comps/Options";
import ButtonBig from "comps/ButtonBig";

import {  
  BrowserRouter as Router,
  Switch,
  Route,
  Link } from "react-router-dom";
import AddMedInfo from "pages/add-med-info";

export default function AddMed() {
    return (
      <Router>
      <div className="addMed">
          <BannerCancel text="medical conditions"/>
          <div className="breadcrumb">
            <h6>1/9</h6>
          </div>
          <h6 className="addMed_title">medical conditions</h6>
          <Options />
          <Options text="angina"/>
          <Options text="arthritis"/>
          <Options text="asthma"/>
          <Options text="dementia"/>
          <Options text="diabetes"/>
          <Options text="epilepsy"/>
          <Options text="high blood pressure"/>
          <Options text="hypertension"/>
          <div className="bigButton">
            {/* <Link to="/add-med-info"> */}
              <ButtonBig text="next"/>
            {/* </Link> */}
          </div>
      </div>

      <Switch>
        <Route path="/add-med-info">
          <AddMedInfo />
        </Route>
      </Switch>
    </Router>
    );
  }
  