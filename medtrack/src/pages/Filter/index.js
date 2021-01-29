import React, { useState, useEffect } from "react";
import BannerBack from "comps/BannerBack";
import Filter from "comps/Filter";
import ButtonBig from "comps/ButtonBig";
import StepWizard from "react-step-wizard";
import BannerCancel from "comps/BannerCancel";


const Step1 = ({ nextStep, goToStep, onNext, previousStep }) => {
  return (
    <div>
      <BannerCancel text="Filter by" />
      <Filter changeIcon1="false" />
      <Filter
        text1="Alzheimer’s"
        text2="Angina"
        text3="Arthritis"
        text4="Asthma"
        reMove="false"
        changeIcon2="false"
      />
      <div className="bigButton">
        <ButtonBig />
      </div>
    </div>
  );
};


export default function FilterPage() {
  return (
    <div className="page">
      <StepWizard>
        <Step1 />
      </StepWizard>
    </div>
  );
}
