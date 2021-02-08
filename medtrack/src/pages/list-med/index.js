import React, { useState, useEffect } from "react";
import BannerCancel from "comps/BannerCancel";
import BannerBack from "comps/BannerBack";
import ListMeds from "comps/ListofMeds";
import MedSpecBanner from "comps/MedSpecBanner";
import Info from "comps/Info";
import Button from "comps/Button";
import ButtonBig from "comps/ButtonBig";

import StepWizard from "react-step-wizard";
import axios from "axios";

const medsData = require("../../../src/meds.json");

const Step1 = ({ nextStep, goToStep, onNext, previousStep, onSelect }) => {
  // backend functions
  const [meds, setMeds] = useState([]);
  const [allmeds, setAll] = useState([]);

  // const getData = async () => {
  //   var resp = await axios.get("https://advdyn2021.herokuapp.com/allbooks");
  //   console.log("get data", resp);
  //   var arr = resp.data;
  //   setAll(resp.data);
  // };

  // const getData = async () => {
  //   setAll(medsData);
  //   console.log("get data", medsData);
  // };
  
  // useEffect(() => {
  //   getData();
  // }, []);

  // backend functions

  const HandleClick = (id) =>{
    if(onSelect){onSelect(id)}
    nextStep();
  }

  return (
    <div className="addMed">
      <BannerCancel text="list of meds" />
      <h6 className="addMed_title">Currently Taking</h6>
      <div>
        {medsData.map((o) => (
        <ListMeds
        medName={o.name}
        time={o.time}
          onClick={HandleClick.bind(this, o.id)}
        />
      ))}
        <ListMeds
          onClick={() => {
            nextStep();
          }}
        />
      </div>
    </div>
  );
};

const Step2 = ({ nextStep, goToStep, onNext, previousStep }) => {
  const [meds, setMeds] = useState([]);
  const [allmeds, setAll] = useState([]);

  // const getData = async () => {
  //   var resp = await axios.get("https://advdyn2021.herokuapp.com/allbooks");
  //   console.log("get data", resp);
  //   var arr = resp.data;
  //   setAll(resp.data);
  // };



  return (
    <div className="page">
      {medsData.map((o) => (
        <MedSpecBanner
          medName={o.name}
          dosage={o.dos}
          unit={o.unit}
          time={o.time}
          onClick={() => {
            previousStep();
          }}
        />
      ))}
      {meds.map((o) => (
        <div className="container">
          <Info title="Reminders" />
          <Info title="Instructions" subtext="Take with food" />
        </div>
      ))}
      <div className="buttons">
        <Button
          text="Edit"
          onClick={() => {
            nextStep();
          }}
        />
        <Button
          text="Delete Med"
          bgcolor={"#63AAC8"}
          // onClick={() => {
          //   goToStep(4);
          // }}
        />
      </div>
    </div>
  );
};

const Step3 = ({ nextStep, goToStep, onNext, previousStep }) => {
  return (
    <div className="addMed">
      <BannerBack />
      <div className="container">
        <Info
          leftimgurl={"/file-text.png"}
          rightimgurl={""}
          title="Donepezil"
        />
      </div>
      <h6 className="addMed_title">med info</h6>
      <div className="fatass">
        <Info leftimgurl={"/symptom-blu.png"} />
        <Info leftimgurl={"/pill-blu.png"} />
        <Info leftimgurl={"/calandarcheck.png"} />
        <Info leftimgurl={"/food.png"} />
        <Info leftimgurl={"/time-blu.png"} />
        <Info leftimgurl={"/appearance.png"} />
      </div>
      <div className="bigButton">
        <ButtonBig text="Update" />
      </div>
    </div>
  );
};

function ListMed() {
  const [meds, setMeds] = useState([]);
  const [allmeds, setAll] = useState([]);

  const getData = async () => {
    var resp = await axios.get("https://advdyn2021.herokuapp.com/allbooks");
    console.log("get data", resp);
    var arr = resp.data;
    setAll(resp.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="page">
      <StepWizard>
        <Step1 onSelect={(id)=>{console.log(id)}} />
        <Step2 />
        <Step3 />
      </StepWizard>
    </div>
  );
}

export default ListMed;
