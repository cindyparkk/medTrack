import React, {useState, useEffect} from 'react'; 
import styled from "styled-components"
import Appearence from "../../public/pills.png"

const MedInfoCon = styled.div`    
    max-width: 328px; 
    height: auto;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #D9D9D9;
    box-sizing:border-box;
`;
const MedInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-item: center;
    text-align: left; 
    align-content: center;   
    padding: 10px; 
    display: flex;

`;
const Time = styled.div`    
    max-width: 328px; 
    height: auto;
    background-color: #06719D;
    border-radius: 10px 10px 0px 0px;
    color: white;
    text-align:center;
    padding: 5px;
`;

const MedInfoBox = ({time, medName,dosage}) => {

    return <MedInfoCon>
        <Time>
            
            <h2>{time}</h2>
        </Time>
        <MedInfo>
            <div>
                <img src={Appearence} />
            </div>
            <div>
                <h3>{medName}</h3>
                <p>{dosage}</p>
            </div>  
        </MedInfo>
    </MedInfoCon>
}

MedInfoBox.defaultProps = {
    time: "8:30AM",
    medName:"Donepezil",
    dosage: "15mg, take 1"
}

export default MedInfoBox; 