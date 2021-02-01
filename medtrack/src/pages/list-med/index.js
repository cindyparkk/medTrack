import React, { useState, useEffect } from "react";
import BannerCancel from "comps/BannerCancel";
import BannerBack from "comps/BannerBack";
import ListMeds from "comps/ListofMeds";
import MedSpecBanner from "comps/MedSpecBanner";
import Info from "comps/Info";
import Button from "comps/Button";
import ButtonBig from "comps/ButtonBig";

import StepWizard from "react-step-wizard";

const Step1 = ({ nextStep, goToStep, onNext, previousStep }) => {
  return (
    <div className="addMed">
      <BannerCancel text="list of meds" />
      <h6 className="addMed_title">Currently Taking</h6>
      <div>
        <ListMeds
          onClick={() => {
            nextStep();
          }}
        />
        <ListMeds />
        <ListMeds />
      </div>
    </div>
  );
};

const Step2 = ({ nextStep, goToStep, onNext, previousStep }) => {
  return (
    <div className="page">
      <MedSpecBanner onClick={()=>{
        previousStep();
      }}/>
      <div className="container">
        <Info title="Reminders" />
        <Info title="Instructions" subtext="Take with food" />
      </div>
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
  return (
    <div className="page">
      <StepWizard>
        <Step1 />
        <Step2 />
        <Step3 />
      </StepWizard>
    </div>
  );
}

export default ListMed;
