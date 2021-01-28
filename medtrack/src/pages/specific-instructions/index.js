import React, {useState, useEffect} from 'react';
import BannerBack from "comps/BannerBack";
import ButtonBig from "comps/ButtonBig";
import Options from "comps/Options";

import { Link } from "react-router-dom";

export default function SpecificIns() {
    return (
      <div className="addMed">
          <BannerBack text="instructions"/>
          <div className="breadcrumb">
            <h6>1/9</h6>
          </div>
          <h6 className="addMed_title">take your med:</h6>
          <Options text="before food"/>
          <Options text="with food"/>
          <Options text="after food"/>
          <Options text="no food instructions"/>
          <div className="bigButton">
            <Link to="/">
              <ButtonBig text="next" />
            </Link>
          </div>
      </div>
    );
  }