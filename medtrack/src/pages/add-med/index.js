import React, {useState, useEffect} from 'react';
import BannerCancel from "comps/BannerCancel";
import Options from "comps/Options";
import ButtonBig from "comps/ButtonBig";
import BannerBack from "comps/BannerBack";
import InputMed from 'comps/Input/medInfo';
import InputAmount from 'comps/Input/doseAmount'

import {  
  BrowserRouter as Router,
  Switch,
  Route,
  Link } from "react-router-dom";

import StepWizard from 'react-step-wizard';

const Step1 = ({nextStep, gotoStep, onNext, previousStep}) =>{
  const [cond, setCond] = useState(null);

  return <div className="addMed">
  <BannerCancel onClick={()=>{
    gotoStep();
    // previous page - route?
  }} text="medical conditions"/>
  <div className="breadcrumb">
    <h6>1/9</h6>
  </div>
  <h6 className="addMed_title">medical conditions</h6>
  <Options />
  <Options text="angina" onClick={()=>setCond("angina")}/>
  <Options text="arthritis"/>
  <Options text="asthma"/>
  <Options text="dementia"/>
  <Options text="diabetes"/>
  <Options text="epilepsy"/>
  <Options text="high blood pressure"/>
  <Options text="hypertension"/>
  <div className="bigButton">
    <ButtonBig text="next" onClick={()=>{
      nextStep();
      onNext(cond);
    }}/>
  </div>
</div>
}

const Step2 = ({nextStep, gotoStep, onNext, previousStep}) => {
  return <div className="addMed">
    <BannerBack onClick={previousStep} text="add medicine"/>
    <div className="breadcrumb">
      <h6>1/9</h6>
    </div>
    <InputMed />
    <div className="bigButton">
        <ButtonBig onClick={()=>{
        nextStep();
      }}text="next" />
    </div>
</div>
}

const Step3 = ({nextStep, gotoStep, onNext, previousStep}) => {
  return <div className="addMed">
    <BannerBack onClick={previousStep} text="add dosage"/>
    <div className="breadcrumb">
      <h6>1/9</h6>
    </div>
    <InputAmount />
    <h6 className="addMed_title">in what unit?</h6>
    <Options text="mg" textTransform="lowercase"/>
    <Options text="iu" textTransform="uppercase"/>
    <Options text="mcg" textTransform="lowercase"/>
    <Options text="mL" textTransform="lowercase"/>
    <Options text="Number of Pills" textTransform="lowercase"/>
    <div className="bigButton">
        <ButtonBig onClick={()=>{
        nextStep();
      }}text="next"/>
    </div>
</div>
}

const Step4 = ({nextStep, gotoStep, onNext, previousStep}) => {
  return 
}

export default function AddMed() {
  const [data, setData] = useState({
    cond:null
  });

    return (
      <div>
      <StepWizard>
        <Step1 onNext={(c)=>{
          setData({
            ...data,
            cond:c
          })
        }}/>
        <Step2 />
        <Step3 />
      </StepWizard>
      </div>
    )
  }
  