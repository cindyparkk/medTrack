import React, {useState, useEffect} from 'react';
import BannerBack from "comps/BannerBack";
import ButtonBig from "comps/ButtonBig";
import Options from "comps/Options";

import { Link } from "react-router-dom";

export default function SpecificDays() {
    return (
      <div className="addMed">
          <BannerBack text="which days"/>
          <div className="breadcrumb">
            <h6>1/9</h6>
          </div>
          <h6 className="addMed_title">frequency</h6>
          <Options text="sunday"/>
          <Options text="monday"/>
          <Options text="tuesday"/>
          <Options text="wednesday"/>
          <Options text="thursday"/>
          <Options text="friday"/>
          <Options text="saturday"/>
          <div className="bigButton">
            <Link to="/">
              <ButtonBig text="next" />
            </Link>
          </div>
      </div>
    );
  }