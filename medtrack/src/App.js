import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import BannerTime from "comps/BannerTime";
import FilterBy from "comps/FilterBy";
import MedInfoBox from "comps/MedInfoBox";
import Button from "comps/Button";

import AddMed from "pages/add-med";
import ListMed from "pages/list-med";

import FilterPage from "pages/Filter";
// const medsData = require("./meds.json");

function App() {
  //backend functions
  const [meds, setMeds] = useState([]);
  // const [allmeds, setAll] = useState([]);
  const [allmeds, setAll] = useState([]);
  
  
  const getData = async () => {
    var resp = await axios.get("https://medtrack-midterm.herokuapp.com/api/meds");
    console.log("get data", resp);
    setAll(resp.data.meds);
  };

  // const getData = () => {
  //   setAll(medsData);
  //   console.log("get data", medsData);
  // };

  const sortEarliest = () => {
    setAll(
      allmeds.sort(sortByTime)
    );
    console.log("clicked")
  }

  useEffect(() => {
    getData();
  }, []);

  //end of backend functions


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
              <button onClick={sortEarliest}>Sort Earliest</button>
              {allmeds.map((o) => (
                <MedInfoBox 
                medName={o.name}
                dos={o.dos}
                unit={o.unit}
                amount={o.amt}
                time={o.time}
                />
              ))}
              <Link to="/add-med">
                <Button text="+ Add Med" />
              </Link>
              <Link to="/list-med" >
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

//App functions - SORT

// by time (i.e. 11:00 - use 24h clock)
const sortByTime = (a, b) => {
  if (a.time < b.time) {
    return -1;
  } else if (a.time > b.time) {
    return 1;
  } else {
    return 0;
  }
  // return a.time - b.time;
};

// App functions - FILTER
const sortByCondition = (a) => {
  var clicked;
  if (clicked == a.cond){
    //show all Data of the input
    // if whatever option is clicked matches ANY of meds in db
  } 
  return;
}



// console.log(sortCondition);


// let sortByAm = med.filter(function (e) {
// return e.time > 12:00;
// })



{/* <Options text="arthritis" onClick={() => setCond("arthritis")} />
<Options text="asthma" onClick={() => setCond("asthma")} />
<Options text="dementia" onClick={() => setCond("dementia")} />
<Options text="diabetes" onClick={() => setCond("diabetes")} />
<Options text="epilepsy" onClick={() => setCond("epilepsy")} />
<Options
  text="high blood pressure"
  onClick={() => setCond("high blood pressure")}
/>
<Options text="hypertension" onClick={() => setCond("hypertension")} /> */}