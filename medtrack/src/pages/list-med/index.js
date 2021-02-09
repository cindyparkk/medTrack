import React, { useState, useEffect } from "react";
import BannerCancel from "comps/BannerCancel";
import BannerBack from "comps/BannerBack";
import ListMeds from "comps/ListofMeds";
import MedSpecBanner from "comps/MedSpecBanner";
import Info from "comps/Info";
import Button from "comps/Button";
import ButtonBig from "comps/ButtonBig";
import Backdrop from "comps/Backdrop";
import Confirm from "comps/Confirm";

import StepWizard from "react-step-wizard";
import axios from "axios";
import styled from 'styled-components';
import {Link, useParams} from 'react-router-dom';

const Container = styled.div`
.open {
 display: none;
}

.open.open{
  display: block;
}
`;

// const medsData = require("../../../src/meds.json");

const Step1 = ({ nextStep, goToStep, onNext, previousStep, onSelect, id }) => {
  // backend functions
  // const [meds, setMeds] = useState({});
  const [allmeds, setAll] = useState([]);
  // const [allids, setIds] = useState([]);

  const getData = async () => {
    var resp = await axios.get("https://medtrack-midterm.herokuapp.com/api/meds");
    // console.log("get data", resp);
    // var arr = resp.data;
    setAll([...resp.data.meds]);
    // setIds(resp.data.meds[0]);
    // console.log("setId", allids);
    console.log(resp.data.meds)
  };
  
  useEffect(() => {
    getData();
  }, []);

  // backend functions

  const HandleClick = (id) =>{
  // setIds(id)    
    onSelect(id)
    nextStep();
  }

  return (
    <div>
      <BannerCancel text="list of meds" />
      <h6 className="addMed_title">Currently Taking</h6>
      <div>
        {allmeds.map((o, i) => (
        <ListMeds
        key={i}
        medName={o.name}
        time={o.time}
        onClick={HandleClick.bind(this, o.id)}
        />
      ))}
      </div>
    </div>
  );
};

const Step2 = ({ nextStep, goToStep, onNext, previousStep, onSelect, id, passid }) => {
  const [meds, setMeds] = useState({});
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(true);
  const params = useParams();
  console.log("PARAMS", params);
  const showPopup = () =>{
    setShow(true);
    console.log("clicked")
  }
  // const [clickedForm, setClickedForm] = useState(null);
  // const HandleContainerSelect = (name) => {
  //   // alert("clicked container "+name);
  //   setClickedForm(name);
  // };

  const getData = async () => {
    var resp = await axios.get("https://medtrack-midterm.herokuapp.com/api/meds"+params.id);
    console.log("get data", resp);
    // if (resp.data.meds.id == id){
      setMeds({...resp.data[0]});
      // setIds(resp.data.meds[0]);
    // }
  };

  // const getId = () => {
  //   {meds.map((o)=>(
  //     id = o.id
  //   ))}
  // }

  const HandleClick = (id) =>{
    // setIds(id)    
      onSelect(id)
      // nextStep();
    }

  useEffect(() => {
    getData();
    // getId();
    console.log( "id", id)
  }, []);

  const handleDelete = (dis) => {

  }
  return ( <Container>
<div className="page">
      {/* {meds.map((o, id) => ( */}
        <MedSpecBanner
          medName={meds.name}
          dosage={meds.dos}
          unit={meds.unit}
          time={meds.time}
          onClick={() => {
            previousStep();
          }}
        />
      {/* ))} */}
      {/* {meds.map((o) => ( */}
        <div className="container">
          <Info title="Reminders" />
          <Info title="Instructions"  subtext={meds.ins}/>
        </div>
      {/* ))} */}
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

          // onContainerSelect={HandleContainerSelect}
          // name="register"
          // bgcolor={clickedForm === "register" ? "inline-flex" : null}

          onClick={()=>{
            setOpen(!open);
            showPopup();
          }}
        />
      </div>
      <div className={open ? "open" : null}>
        {/* <Confirm  title="Are you sure?" subtitle="" imgurl="" text1="Delete" text2="Cancel"/>
        <Backdrop /> */}
        Hi
      </div>
    </div>
    </Container>
    
  );
};

const Step3 = ({ nextStep, goToStep, onNext, previousStep }) => {
  return (
    <div className="addMed">
      <BannerBack onClick={previousStep}/>
      <div className="container">
        <Info
          leftimgurl={"/file-text.png"}
          rightimgurl={""}
          title="Donepezil"
        />
      </div>
      <h6 className="addMed_title">med info</h6>
      <div className="fatass">
        <Info title="Medical Condition" leftimgurl={"/symptom-blu.png"} />
        <Info title="Dosage" leftimgurl={"/pill-blu.png"} />
        <Info title="Frequency" leftimgurl={"/calandarcheck.png"} />
        <Info title="Instructions" leftimgurl={"/food.png"} />
        <Info title="Time" leftimgurl={"/time-blu.png"} />
        {/* <Info title="Dosage" leftimgurl={"/appearance.png"} /> */}
      </div>
      <div className="bigButton">
        <ButtonBig text="Update" />
      </div>
      {/* <Confirm />
      <Backdrop /> */}
    </div>
  );
};
const Step4 = ({ nextStep, goToStep, onNext, previousStep }) => {
  return (
    <div className="addMed">
      {/* <div className="popup"> 
      
      </div> */}
      <BannerBack onClick={previousStep}/>
      <div className="container">
        <Info
          leftimgurl={"/file-text.png"}
          rightimgurl={""}
          title="Donepezil"
        />
      </div>
      <h6 className="addMed_title">med info</h6>
      <div className="fatass">
        <Info title="Medical Condition" leftimgurl={"/symptom-blu.png"} />
        <Info title="Dosage" leftimgurl={"/pill-blu.png"} />
        <Info title="Frequency" leftimgurl={"/calandarcheck.png"} />
        <Info title="Instructions" leftimgurl={"/food.png"} />
        <Info title="Time" leftimgurl={"/time-blu.png"} />
        {/* <Info title="Dosage" leftimgurl={"/appearance.png"} /> */}
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
  const [selectedId, setSelectedId] = useState(null);

  const getData = async () => {
    var resp = await axios.get("https://medtrack-midterm.herokuapp.com/api/meds");
    console.log("get data", resp);
    setAll(resp.data.meds);
  };

  // const idthatwaspassedin = .id

  // where /  if allmeds[id that was passed in -1].name
  //   allmeds.name
  // }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="page">
      <StepWizard>
        <Step1 onClick={(id)=>{
          setSelectedId(id);
        }} onSelect={(id)=>{console.log(id)}} />
        <Step2 onSelect={(id)=>{console.log(id)}}/> 
        <Step3 />
        {/* <Step4 />
        <Step5 /> */}
      </StepWizard>
    </div>
  );
}

ListMed.defaultProps = {
  id:null
}

export default ListMed;
