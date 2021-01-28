import React, {useState, useEffect} from 'react';
import BannerBack from "comps/BannerBack";
import InputMed from 'comps/Input/medInfo';
import ButtonBig from "comps/ButtonBig";
import Options from "comps/Options";

import { Link } from "react-router-dom";

export default function AddMedInstructions() {
    return (
      <div className="addMed">
          <BannerBack text="Instructions"/>
          <div className="breadcrumb">
            <h6>7/9</h6>
          </div>
          <h6 className="addMed_title">Take your med:</h6>
          <Options text="Before Food"/>
          <Options text="With Food"/>
          <Options text="After Food"/>
          <Options text="No Food Instructions"/>

          <div className="bigButton">
            <Link to="/">
              <ButtonBig text="next" />
            </Link>
          </div>
      </div>
    );
  }