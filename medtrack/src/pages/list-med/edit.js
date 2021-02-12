import React, { useState, useEffect, Component } from "react";
import BannerBack from "comps/BannerBack";
import EditDropdown from "comps/EditDropdown";
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
    // const editData = async (filled) => {
    //     var resp = await axios.patch("https://medtrack-midterm.herokuapp.com/api/meds/edit/"+params.id, {
    //       name: meds.name,
    //       cond: meds.cond,
    //       dosage: meds.dos,
    //       unit: meds.unit,
    //       days: meds.days,
    //       ins: meds.ins,
    //       time: meds.time,
    //       amt: meds.amt
    //     });
    //     // console.log("editing", resp);
    //     // if (id == 1){
    //       getData();
    //       // setMeds({...resp.data.result[0]});
    //       // setMeds(resp.data.meds)
    //       // setIds(resp.data.meds[0]);
    //     // }
    //   };

    useEffect(() => {
      getData();
      console.log("loading")
    }, []);


    return (
      <div className="addMed">
        <BannerBack onClick={() => history.goBack()}
        />
        <div className="container">
          <EditDropdown
            leftimgurl={"/file-text.png"}
            rightimgurl={"/down.png"}
            title={meds.name}
            subtext=""
            dosage="" unit=""
          />
        </div>
        <h6 className="addMed_title">med info</h6>
        <div className="content">
          <EditDropdown title="Medical Condition" subtext={meds.cond} dosage="" unit="" leftimgurl={"/symptom-blu.png"} rightimgurl={"/down.png"} 
          // onComplete={()=>{
          //   editData(meds.cond)}}
            />
          <EditDropdown title="Dosage" subtext="" dosage={meds.dos} unit={meds.unit} leftimgurl={"/pill-blu.png"} rightimgurl={"/down.png"}/>
          <EditDropdown title="Instructions" subtext={meds.ins} dosage="" unit="" leftimgurl={"/food.png"} rightimgurl={"/down.png"}/>
          <EditDropdown title="Time" subtext={meds.time} dosage="" unit="" leftimgurl={"/time-blu.png"} rightimgurl={"/down.png"}/>
        </div>
        {/* <div className="bigButton">
          <ButtonBig text="Update" />
        </div> */}
        {/* <Confirm />
        <Backdrop /> */}
      </div>





      // origianl version 
      //     <Info
      //       leftimgurl={"/file-text.png"}
      //       rightimgurl={""}
      //       title={meds.name}
      //       subtext=""
      //       dosage="" unit=""
      //     />
      //   </div>
      //   <h6 className="addMed_title">med info</h6>
      //   <div className="content">
      //     <Info title="Medical Condition" subtext={meds.cond} dosage="" unit="" leftimgurl={"/symptom-blu.png"} />
      //     <Info title="Dosage" subtext="" dosage={meds.dos} unit={meds.unit} leftimgurl={"/pill-blu.png"} />
      //     <Info title="Instructions" subtext={meds.ins} dosage="" unit="" leftimgurl={"/food.png"} />
      //     <Info title="Time" subtext={meds.time} dosage="" unit="" leftimgurl={"/time-blu.png"} />
      //   </div>
      //   {/* <div className="bigButton">
      //     <ButtonBig text="Update" />
      //   </div> */}
      //   {/* <Confirm />
      //   <Backdrop /> */}
      // </div>
    );
  };

  export default Edit; 