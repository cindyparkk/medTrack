import React, {useState, useEffect} from 'react';
import BannerCancel from "comps/BannerCancel";
import Filter from "comps/Filter";
import Options from "comps/Options";
import ButtonBig from "comps/ButtonBig";

function AddMed() {
    return (
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
            <ButtonBig />
          </div>
      </div>
    );
  }
  
  export default AddMed;