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
          {/* <h6 className="addMed_title">medical conditions</h6> */}
          <Options />
          <Filter />
          <div className="bigButton">
            <ButtonBig />
          </div>
      </div>
    );
  }
  
  export default AddMed;