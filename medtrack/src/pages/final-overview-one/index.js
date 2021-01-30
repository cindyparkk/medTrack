import React, {useState, useEffect} from 'react';
import BannerBack from "comps/BannerBack";
import InputAmount from 'comps/Input/doseAmount'
import ButtonBig from "comps/ButtonBig";
import Options from "comps/Options";
import HowOftenInput from "comps/Input/howoften";
import OverviewLine from "comps/OverviewTime";
import OverviewOften from 'comps/OverviewOften';
import OverviewTime from 'comps/OverviewTime';


import { Link } from "react-router-dom";

export default function FinalOverViewOne() {
    return (
      <div className="addMed_info">
          <BannerBack text="Schedule Overview"/>
          <div className="breadcrumb">
            <h6></h6>
          </div>
          <OverviewLine />
          <h6 className="addMed_title">HOW MANY TIMES A DAY?</h6>
          <OverviewLine />
          <h6 className="addMed_title">SET TIME AND DOSE</h6>
          <OverviewTime />



      
          <div className="bigButton">
            <Link to="/">
              <ButtonBig text="next"/>
            </Link>
          </div>
      </div>
    );
  }