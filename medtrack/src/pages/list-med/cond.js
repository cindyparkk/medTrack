import React, { useState, useEffect, Component } from "react";
import BannerBack from "comps/BannerBack";
import Info from "comps/Info";
import ButtonBig from "comps/ButtonBig";
import axios from "axios";
import styled from 'styled-components';
import {Link, useParams, useHistory} from 'react-router-dom';

function Edit({}) {
    const [meds, setMeds] = useState({});
    const params = useParams();
    const history = useHistory();
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

     
      const editData = async () => {
        var resp = await axios.post("https://medtrack-midterm.herokuapp.com/api/meds/edit/"+params.id);
        console.log("editing", resp);
        // if (id == 1){
          setMeds({...resp.data.result[0]});
          // setMeds(resp.data.meds)
          // setIds(resp.data.meds[0]);
        // }
      };

      useEffect(() => {
        getData();
        editData();
        console.log("loading")
      }, []);


    return (
      <div className="addMed">
        {/* <Link to={"/med/"+meds.id}> */}
        <BannerBack onClick={() => history.goBack()}
        />
        {/* </Link > */}
        <div className="container">
          <Info
            leftimgurl={"/file-text.png"}
            rightimgurl={""}
            title={meds.name}
            subtext=""
            dosage="" unit=""
          />
        </div>
        <h6 className="addMed_title">med info</h6>
        <div className="content">
          <Info title="Medical Condition" subtext={meds.cond} dosage="" unit="" leftimgurl={"/symptom-blu.png"} />
          <Info title="Dosage" subtext="" dosage={meds.dos} unit={meds.unit} leftimgurl={"/pill-blu.png"} />
          <Info title="Instructions" subtext={meds.ins} dosage="" unit="" leftimgurl={"/food.png"} />
          <Info title="Time" subtext={meds.time} dosage="" unit="" leftimgurl={"/time-blu.png"} />
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