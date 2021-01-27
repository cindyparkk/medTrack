import React, {useState, useEffect} from 'react';
import BannerBack from "comps/BannerBack";
import InputMed from 'comps/Input/medInfo';
import ButtonBig from "comps/ButtonBig";

import { Link } from "react-router-dom";

export default function AddMedInfo() {
    return (
      <div className="addMed_info">
          <BannerBack text="add medicine"/>
          <div className="breadcrumb">
            <h6>1/9</h6>
          </div>
          {/* <h6 className="addMed_title">medical conditions</h6> */}
          <InputMed />
          <div className="bigButton">
            <Link to="/">
              <ButtonBig text="next" />
            </Link>
          </div>
      </div>
    );
  }