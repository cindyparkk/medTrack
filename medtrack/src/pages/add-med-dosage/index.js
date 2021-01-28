import React, {useState, useEffect} from 'react';
import BannerBack from "comps/BannerBack";
import InputAmount from 'comps/Input/doseAmount'
import ButtonBig from "comps/ButtonBig";
import Options from "comps/Options";

import { Link } from "react-router-dom";

export default function AddMedDosage() {
    return (
      <div className="addMed_info">
          <BannerBack text="add dosage"/>
          <div className="breadcrumb">
            <h6>1/9</h6>
          </div>
          {/* <h6 className="addMed_title">medical conditions</h6> */}
          <InputAmount />
          <h6 className="addMed_title">in what unit?</h6>
          <Options text="mg" textTransform="lowercase"/>
          <Options text="iu" textTransform="uppercase"/>
          <Options text="mcg" textTransform="lowercase"/>
          <Options text="mL" textTransform="lowercase"/>
          <Options text="Number of Pills" textTransform="lowercase"/>
          <div className="bigButton">
            <Link to="/">
              <ButtonBig text="next"/>
            </Link>
          </div>
      </div>
    );
  }