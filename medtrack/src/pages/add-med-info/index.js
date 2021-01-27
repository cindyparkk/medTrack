import React, {useState, useEffect} from 'react';
import BannerBack from "comps/BannerBack";

import ButtonBig from "comps/ButtonBig";

import { Link } from "react-router-dom";

function AddMedInfo() {
    return (
      <div className="addMed_info">
          <BannerBack/>
          <div className="breadcrumb">
            <h6>1/9</h6>
          </div>
          <h6 className="addMed_title">medical conditions</h6>
          <div className="bigButton">
            <Link to="/">
              <ButtonBig />
            </Link>
          </div>
      </div>
    );
  }
  
  export default AddMedInfo;