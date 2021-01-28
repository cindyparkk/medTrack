import React, {useState, useEffect} from 'react';
import BannerBack from "comps/BannerBack";
import InputMed from 'comps/Input/medInfo';
import ButtonBig from "comps/ButtonBig";
import Options from "comps/Options";

import { Link } from "react-router-dom";

export default function AddMedTimes() {
    return (
      <div className="addMed">
          <BannerBack text="Times a Day"/>
          <div className="breadcrumb">
            <h6>6/9</h6>
          </div>
          <h6 className="addMed_title">How many times a day?</h6>
          <Options text="1"/>
          <Options text="2"/>
          <Options text="3"/>
          <Options text="4"/>
          <Options text="5"/>

          <div className="bigButton">
            <Link to="/">
              <ButtonBig text="next" />
            </Link>
          </div>
      </div>
    );
  }