import React, {useState, useEffect} from 'react';
import BannerBack from "comps/BannerBack";
import InputMed from 'comps/Input/medInfo';
import ButtonBig from "comps/ButtonBig";
import Options from "comps/Options";

import { Link } from "react-router-dom";

export default function AddMedFreq() {
    return (
      <div className="addMed">
          <BannerBack text="frequency"/>
          <div className="breadcrumb">
            <h6>1/9</h6>
          </div>
          <h6 className="addMed_title">frequency</h6>
          <Options text="every day"/>
          <Options text="days interval"/>
          <Options text="specific days"/>
          <div className="bigButton">
            <Link to="/">
              <ButtonBig text="next" />
            </Link>
          </div>
      </div>
    );
  }