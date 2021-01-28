import React, {useState, useEffect} from 'react';
import BannerBack from "comps/BannerBack";
import InputAmount from 'comps/Input/doseAmount'
import ButtonBig from "comps/ButtonBig";
import Options from "comps/Options";
import HowOftenInput from "comps/Input/howoften";

import { Link } from "react-router-dom";

export default function AddMedHowOften() {
    return (
      <div className="addMed_info">
          <BannerBack text="How Often?"/>
          <div className="breadcrumb">
            <h6>5/9</h6>
          </div>
          {/* <h6 className="addMed_title">medical conditions</h6> */}
          <HowOftenInput />
      
          <div className="bigButton">
            <Link to="/">
              <ButtonBig text="next"/>
            </Link>
          </div>
      </div>
    );
  }