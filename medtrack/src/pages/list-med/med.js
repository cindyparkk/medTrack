import React, { useState, useEffect } from "react";
import MedSpecBanner from "comps/MedSpecBanner";
import Info from "comps/Info";
import Button from "comps/Button";
import Confirm from "comps/Confirm";
import Backdrop from "comps/Backdrop";
import axios from "axios";
import styled from 'styled-components';
import { useParams, useHistory, BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// const Container = styled.div`
// .open {
//  display: none;
// }

// .open.open{
//   display: block;
// }
// `;

function Med({ onSelect, id, passid }) {
    // const [meds, setMeds] = useState([]);
    const [meds, setMeds] = useState({});
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);

    const params = useParams();
    console.log("PARAMS", params);

    const history = useHistory();

    const showPopup = () =>{
      setShow(true);
      console.log("clicked")
    }
  
    const getData = async () => {
      var resp = await axios.get("https://medtrack-midterm.herokuapp.com/api/meds/med_by_id/"+params.id);
      console.log("get data2222", resp);
      // if (id == 1){
        setMeds({...resp.data.result[0]});
        // setMeds(resp.data.meds)
        // setIds(resp.data.meds[0]);
      // }
    };
  
    const HandleClick = (id) =>{
      // setIds(id)    
        onSelect(id);
        console.log(id)
        // nextStep();
      }
  
    useEffect(() => {
      getData();
    }, []);
  
    const handleOpen = () => {
      setOpen(state => !state);
    }

    const handleDelete = () => {
  
    }
    return ( <div className="page">
        {/* {id == id ? meds.map((o, id) => (  */}
          <MedSpecBanner
          // key={id}
            medName={meds.name}
            dosage={meds.dos}
            unit={meds.unit}
            time={meds.time}
            onClick={() => {
            history.goBack();
            }}
          />
         {/* )) : null}  */}
        {/* {meds.map((o) => ( */}
          <div className="container">
            <Info title="Reminders" subtext={meds.days+" "+meds.time+" Take"} dosage={meds.amt+" pills"} unit=""/>
            <Info title="Instructions"  subtext={meds.ins} dosage="" unit=""/>
          </div>
        {/* ))} */}
        <div className="buttons">
            <Link to={"/edit/"+meds.id}>
            <Button
                margin="10px 0px"
                text="Edit"
                onClick={() => {
                }}
            />
            </Link>
          <Button
            margin="10px 0px"
            text="Delete Med"
            bgcolor={"#63AAC8"}  
            onClick={handleOpen}
          />
        </div>
        {open && ( <div className="page_popup">
          <Confirm 
          onBottom={handleOpen} 
          title="Are you sure?" 
          subtitle="" imgurl="" 
          text1="Delete" text2="Cancel"
          top="-70vh"
          />
          <Backdrop />
        </div>)}
       
      </div>
 
    );
  };

  export default Med;