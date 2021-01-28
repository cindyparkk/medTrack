import React, {useState, useEffect} from 'react';
import BannerBack from "comps/BannerBack";
import ButtonBig from "comps/ButtonBig";
import MedAppearance from "comps/MedAppearance";

import { Link } from "react-router-dom";

export default function SpecificAppear() {
    return (
      <div className="addMed">
          <BannerBack text="appearance"/>
          <div className="breadcrumb">
            <h6>1/9</h6>
          </div>
          <h6 className="addMed_title">shape &amp; color</h6>
          <MedAppearance />
          <div className="bigButton">
            <Link to="/">
              <ButtonBig text="next" />
            </Link>
          </div>
      </div>
    );
  }