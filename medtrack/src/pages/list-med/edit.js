import React, { useState, useEffect } from "react";
import BannerBack from "comps/BannerBack";
import Info from "comps/Info";
import ButtonBig from "comps/ButtonBig";
import axios from "axios";
import styled from 'styled-components';
import {Link, useParams} from 'react-router-dom';


function Edit({}) {
    const [meds, setMeds] = useState({});
    const params = useParams();
    console.log("PARAMS", params);
    const getData = async () => {
        var resp = await axios.get("https://medtrack-midterm.herokuapp.com/api/meds/med_by_id/"+params.id);
        console.log("get data2222", resp);
        // if (id == 1){
          setMeds({...resp.data.result[0]});
          // setMeds(resp.data.meds)
          // setIds(resp.data.meds[0]);
        // }
      };

      useEffect(() => {
        getData();
        console.log("loading")
      }, []);


    return (
      <div className="addMed">
        <BannerBack/>
        <div className="container">
          <Info
            leftimgurl={"/file-text.png"}
            rightimgurl={""}
            title="Donepezil"
          />
        </div>
        <h6 className="addMed_title">med info</h6>
        <div className="fatass">
          <Info title="Medical Condition" leftimgurl={"/symptom-blu.png"} />
          <Info title="Dosage" leftimgurl={"/pill-blu.png"} />
          <Info title="Frequency" leftimgurl={"/calandarcheck.png"} />
          <Info title="Instructions" leftimgurl={"/food.png"} />
          <Info title="Time" leftimgurl={"/time-blu.png"} />
          {/* <Info title="Dosage" leftimgurl={"/appearance.png"} /> */}
        </div>
        <div className="bigButton">
          <ButtonBig text="Update" />
        </div>
        {/* <Confirm />
        <Backdrop /> */}
      </div>
    );
  };

  export default Edit; 