import React, {useState, useEffect} from 'react';
import BannerBack from "comps/BannerBack";
import ButtonBig from "comps/ButtonBig";
import InputAmount from 'comps/Input/doseAmount'
import Input from 'comps/Input/time'

import { Link } from "react-router-dom";

export default function SpecificOverview() {
    return (
      <div className="addMed">
          <BannerBack text="overview"/>
          <div className="breadcrumb">
            <h6>1/9</h6>
          </div>
          <h6 className="addMed_title">time</h6>
          <div className="bigButton">
            <Link to="/">
              <ButtonBig text="next" />
            </Link>
          </div>
      </div>
    );
  }