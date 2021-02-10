import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import BannerTime from "comps/BannerTime";
import FilterBy from "comps/FilterBy";
import MedInfoBox from "comps/MedInfoBox";
import Button from "comps/Button";
import Filter from "comps/Filter";

import AddMed from "pages/add-med";
import ListMed from "pages/list-med";
import Med from "pages/list-med/med";
import Edit from "pages/list-med/edit";
import Title from "comps/Title";

import FilterPage from "pages/Filter";
// const medsData = require("./meds.json");



function App() {
  //backend functions
  const [allmeds, setAll] = useState([]);
  const [meds, setMeds] = useState([]);

  // const getData = () => {
  //   setAll(medsData);
  //   console.log("get data", medsData);
  // };

  const sortEarliest = () => {
    // console.log("before sort: meds", meds);
    // console.log("before sort: allmeds", allmeds);
    setMeds(allmeds.sort(sortByTime));
    // console.log("after sort: meds", meds);
    // console.log("after sort: allmeds", allmeds);
  };

  //this doesn't work
  const sortLatest = () => {
    //   console.log("before sort: meds", meds);
    //   console.log("before sort: allmeds", allmeds);
    setMeds(allmeds.sort(sortByTimeReverse));
    // console.log("after sort: meds", meds);
    // console.log("after sort: allmeds", allmeds);
  };

  const setMedsWithFilteredData = (text) => {
    // let result = "";
    setMeds(
      meds.filter((o) => {
        // console.log("filtering?");
        return o.name.includes(text);
        // result = o.name.includes("Aspirin");
      })
    );
    // return console.log(result) + result;
  };

  const getData = async () => {
    var resp = await axios.get(
      "https://medtrack-midterm.herokuapp.com/api/meds"
    );
    // console.log("get data", resp);
    setAll([...resp.data.meds]);
    setMeds([...resp.data.meds]);
  };
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
          {/* <Route path="/Filter">
            <FilterPage />
          </Route> */}
          <Route exact path="/list-med">
            <ListMed />
          </Route>
          <Route exact path="/">
            <div className="page">
              <BannerTime />
              <Filter />
              {/* <Link to="/Filter">
                <FilterBy />
              </Link> */}
              {/* <button onClick={sortEarliest}>Sort Earliest</button> */}
              {/* <button onClick={sortLatest}>Sort Latest</button> */}
              <div className="home_buttons">
                <Button width="200px"text="Earliest" />
                <Button width="200px" text="Latest" />
              </div>
              <Title />
              {/* <button onClick={Filter}>Filter</button> */}
              {meds.map((o) => (
                <MedInfoBox
                  medName={o.name}
                  dos={o.dos}
                  unit={o.unit}
                  amount={o.amt}
                  time={o.time}
                />
              ))}
              <Link to="/add-med">
                <Button margin="10px 0px" text="+ Add Med" />
              </Link>
              <Link to="/list-med">
                <Button margin="10px 0px" text="See All Meds" bgcolor={"#63AAC8"} />
              </Link>
            </div>
          </Route>
          <Route exact path="/med/:id">
            <Med />
          </Route>
          <Route exact path="/edit/:id">
            <Edit />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

//App functions - SORT

// by time (i.e. 11:00 - use 24h clock)
function sortByTime(a, b) {
  // if (parseInt(a.time) < parseInt(b.time)) {
  //   // console.log("I'm sorting things a > b");
  //   return -1;
  // } else if (parseInt(a.time) > parseInt(b.time)) {
  //   // console.log("I'm sorting things a < b");
  //   return 1;
  // } else {
  //   return 0;
  // }
  return parseInt(a.time) - parseInt(b.time);
}
function sortByTimeReverse(a, b) {
  // if (parseInt(a.time) < parseInt(b.time)) {
  //   // console.log("I'm sorting things a > b");
  //   return 1;
  // } else if (parseInt(a.time) > parseInt(b.time)) {
  //   // console.log("I'm sorting things a < b");
  //   return -1;
  // } else {
  //   return 0;
  // }
  return parseInt(b.time) - parseInt(a.time);
}

// App functions - FILTER
const sortByCondition = (a) => {
  var clicked;
  if (clicked == a.cond) {
    //show all Data of the input
    // if whatever option is clicked matches ANY of meds in db
  }
  return;
};

// console.log(sortCondition);

// let sortByAm = med.filter(function (e) {
// return e.time > 12:00;
// })