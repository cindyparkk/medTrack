import React, {useState, useEffect} from 'react';
import BannerBack from "comps/BannerBack";
import ButtonBig from "comps/ButtonBig";
import InputAmount from 'comps/Input/doseAmount'
import Input from 'comps/Input/time'

import { Link } from "react-router-dom";

export default function SpecificDos() {
    return (
      <div className="addMed">
          <BannerBack text="time &amp; dose"/>
          <div className="breadcrumb">
            <h6>1/9</h6>
          </div>
          <h6 className="addMed_title">time</h6>
          <Input />
          <InputAmount />
          <div className="bigButton">
            <Link to="/">
              <ButtonBig text="next" />
            </Link>
          </div>
      </div>
    );
  }