import React, { useState, useEffect } from "react";
import BannerBack from "comps/BannerBack";
import Filter from "comps/Filter";
import ButtonBig from "comps/ButtonBig";
import BannerCancel from "comps/BannerCancel";
import BannerTime from "comps/BannerTime";
import FilterBy from "comps/FilterBy";
import Button from "comps/Button";
import MedInfoBox from "comps/MedInfoBox";

import StepWizard from "react-step-wizard";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Step1 = ({ nextStep, goToStep, onNext, previousStep }) => {
    //backend functions
    const [meds, setMeds] = useState([]);
    const [allmeds, setAll] = useState([]);
    const [cond, setCond] = useState(null);
  
    const getData = async () => {
      var resp = await axios.get("http://localhost:8888/api/meds");
      console.log("get data", resp);
      var arr = resp.data;
      setAll(resp.data);
    };
    
    const FilteringPage = (name) => {
      setMeds(
        allmeds.filter((o) => {
          return o.name.includes(name)
        })
        )
      };
      
        useEffect(() => {
          getData();
        }, []);

    const handleSelect = (name) => {
      setCond(name);
      console.log(name);
    }
      //end of backend functions

  return (
    <div>
      <BannerCancel text="Filter by" />
      <Filter onSelect={handleSelect} changeIcon1="false" />
      <Filter
        text1="Alzheimer’s"
        text2="Angina"
        text3="Arthritis"
        text4="Asthma"
        reMove="false"
        changeIcon2="false"
        onSelect={handleSelect}
        // onClick={()=>{
        //   handleSelect();
        // }}
      />
      <div className="bigButton">
        <ButtonBig 
        disable={cond === null}
        onClick={()=>{
          nextStep();
          onNext(cond);
        }}
        />
      </div>
    </div>
  );
};

const Step2 = ({ nextStep, goToStep, onNext, previousStep }) => {
  const [meds, setMeds] = useState([]);

  return(
    <div className="page">
              <BannerTime />
              <Link to="/Filter">
                <FilterBy />
              </Link>
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
                <Button text="+ Add Med" />
              </Link>
              <Link to="/list-med" >
                <Button text="See All Meds" bgcolor={"#63AAC8"} />
              </Link>
            </div>
  )
}

export default function FilterPage() {
  const [filteroption, setFilteroption] = useState();
  
  return (
    <div className="page">
      <StepWizard>
        <Step1 onNext={(n) => {
            setData({filteroption: n});
          }}/>
        <Step2 />
      </StepWizard>
    </div>
  );
}


