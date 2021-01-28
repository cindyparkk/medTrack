import React, {useState, useEffect} from 'react';
import BannerBack from "comps/BannerBack";
import InputMed from 'comps/Input/medInfo';
import ButtonBig from "comps/ButtonBig";
import Options from "comps/Options";
import MedAppearance from "comps/MedAppearance";

import { Link } from "react-router-dom";

export default function AddMedAppearance() {
    return (
      <div className="addMed">
          <BannerBack text="Appearance"/>
          <div className="breadcrumb">
            <h6>9/9</h6>
          </div>
          <h6 className="addMed_title">Shape &amp; Color</h6>
          <MedAppearance />
          <div className="bigButton">
            <Link to="/">
              <ButtonBig text="next" />
            </Link>
          </div>
      </div>
    );
  }