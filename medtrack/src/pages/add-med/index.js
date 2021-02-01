import React, { useState, useEffect } from "react";
import BannerCancel from "comps/BannerCancel";
import Options from "comps/Options";
import ButtonBig from "comps/ButtonBig";
import BannerBack from "comps/BannerBack";
import InputMed from "comps/Input/medInfo";
import InputAmount from "comps/Input/doseAmount";
import HowOftenInput from "comps/Input/howoften";
import Input from "comps/Input/time";
import MedAppearance from "comps/MedAppearance";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import StepWizard from "react-step-wizard";

const Step1 = ({ nextStep, goToStep, onNext, previousStep }) => {
  const [cond, setCond] = useState(null);

  return (
    <div className="addMed">
      <BannerCancel
        onClick={() => {
          goToStep();
          // previous page - route?
        }}
        text="medical conditions"
      />
      <div className="breadcrumb">
        <h6>1/9</h6>
      </div>
      <h6 className="addMed_title">medical conditions</h6>
      <Options />
      <Options text="angina" onClick={() => setCond("angina")} />
      <Options text="arthritis" />
      <Options text="asthma" />
      <Options text="dementia" />
      <Options text="diabetes" />
      <Options text="epilepsy" />
      <Options text="high blood pressure" />
      <Options text="hypertension" />
      <div className="bigButton">
        <ButtonBig
          text="next"
          onClick={() => {
            nextStep();
            onNext(cond);
          }}
        />
      </div>
    </div>
  );
};

const Step2 = ({ nextStep, goToStep, onNext, previousStep }) => {
  return (
    <div className="addMed">
      <BannerBack onClick={previousStep} text="add medicine" />
      <div className="breadcrumb">
        <h6>2/9</h6>
      </div>
      <InputMed />
      <div className="bigButton">
        <ButtonBig
          onClick={() => {
            nextStep();
          }}
          text="next"
        />
      </div>
    </div>
  );
};

const Step3 = ({ nextStep, goToStep, onNext, previousStep }) => {
  return (
    <div className="addMed">
      <BannerBack onClick={previousStep} text="add dosage" />
      <div className="breadcrumb">
        <h6>3/9</h6>
      </div>
      <InputAmount />
      <h6 className="addMed_title">in what unit?</h6>
      <Options text="mg" textTransform="lowercase" />
      <Options text="iu" textTransform="uppercase" />
      <Options text="mcg" textTransform="lowercase" />
      <Options text="mL" textTransform="lowercase" />
      <Options text="Number of Pills" textTransform="lowercase" />
      <div className="bigButton">
        <ButtonBig
          onClick={() => {
            nextStep();
          }}
          text="next"
        />
      </div>
    </div>
  );
};

const Step4 = ({ nextStep, goToStep, onNext, previousStep }) => {
  return (
    <div className="addMed">
      <BannerBack onClick={previousStep} text="frequency" />
      <div className="breadcrumb">
        <h6>4/9</h6>
      </div>
      <h6 className="addMed_title">frequency</h6>
      <Options
        text="every day"
        onClick={() => {
          goToStep(7);
        }}
      />
      <Options
        text="days interval"
        onClick={() => {
          goToStep(6);
        }}
      />
      <Options
        text="specific days"
        onClick={() => {
          goToStep(5);
        }}
      />
    </div>
  );
};

const Step6 = ({ nextStep, goToStep, onNext, previousStep }) => {
  return (
    <div className="addMed_info">
      <BannerBack onClick={previousStep} text="How Often?" />
      <div className="breadcrumb">
        <h6>5/9</h6>
      </div>
      <HowOftenInput />

      <div className="bigButton">
        <ButtonBig
          onClick={() => {
            nextStep();
          }}
          text="next"
        />
      </div>
    </div>
  );
};

const Step7 = ({ nextStep, goToStep, onNext, previousStep }) => {
  return (
    <div className="addMed">
      <BannerBack
        onClick={() => {
          goToStep(4);
        }}
        text="Times a Day"
      />
      <div className="breadcrumb">
        <h6>6/9</h6>
      </div>
      <h6 className="addMed_title">How many times a day?</h6>
      <Options text="1" />
      <Options text="2" />
      <Options text="3" />
      <Options text="4" />
      <Options text="5" />
      <div className="bigButton">
        <ButtonBig
          onClick={() => {
            nextStep();
          }}
          text="next"
        />
      </div>
    </div>
  );
};

const Step8 = ({ nextStep, goToStep, onNext, previousStep }) => {
  return (
    <div className="addMed">
      <BannerBack onClick={previousStep} text="Instructions" />
      <div className="breadcrumb">
        <h6>7/9</h6>
      </div>
      <h6 className="addMed_title">Take your med:</h6>
      <Options text="Before Food" />
      <Options text="With Food" />
      <Options text="After Food" />
      <Options text="No Food Instructions" />
      <div className="bigButton">
        <ButtonBig
          onClick={() => {
            nextStep();
          }}
          text="next"
        />
      </div>
    </div>
  );
};

const Step9 = ({ nextStep, goToStep, onNext, previousStep }) => {
  return (
    <div className="addMed">
      <BannerBack onClick={previousStep} text="time &amp; dose" />
      <div className="breadcrumb">
        <h6>8/9</h6>
      </div>
      <h6 className="addMed_title">time</h6>
      <Input />
      <InputAmount />
      <div className="bigButton">
        <ButtonBig
          onClick={() => {
            nextStep();
          }}
          text="next"
        />
      </div>
    </div>
  );
};

const Step10 = ({ nextStep, goToStep, onNext, previousStep }) => {
  return (
    <div className="addMed">
      <BannerBack onClick={previousStep} text="appearance" />
      <div className="breadcrumb">
        <h6>9/9</h6>
      </div>
      <h6 className="addMed_title">shape &amp; color</h6>
      <MedAppearance />
      <div className="bigButton">
        <ButtonBig
          onClick={() => {
            nextStep();
          }}
          text="next"
        />
      </div>
    </div>
  );
};

const Step5 = ({ nextStep, goToStep, onNext, previousStep }) => {
  return (
    <div className="addMed">
      <BannerBack onClick={previousStep} text="which days" />
      <div className="breadcrumb">
        <h6>5/9</h6>
      </div>
      <h6 className="addMed_title">frequency</h6>
      <Options text="sunday" />
      <Options text="monday" />
      <Options text="tuesday" />
      <Options text="wednesday" />
      <Options text="thursday" />
      <Options text="friday" />
      <Options text="saturday" />
      <div className="bigButton">
        <ButtonBig
          onClick={() => {
            goToStep(7);
          }}
          text="next"
        />
      </div>
    </div>
  );
};

export default function AddMed() {
  const [data, setData] = useState({
    cond: null,
  });
  return (
    <div>
      <StepWizard>
        <Step1
          onNext={(c) => {
            setData({
              ...data,
              cond: c,
            });
          }}
        />
        <Step2 />
        <Step3 />
        <Step4 />
        <Step5 />
        <Step6 />
        <Step7 />
        <Step8 />
        <Step9 />
        <Step10 />
      </StepWizard>
    </div>
  );
}
