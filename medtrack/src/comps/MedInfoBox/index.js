import React, {useState, useEffect} from 'react'; 
import styled from "styled-components";
import Appearence from "../../public/pills-1.svg";
import CheckMark from "../../public/checked.svg";

const MedInfoCon = styled.div`    
    max-width: 328px; 
    height: auto;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #D9D9D9;
    box-sizing:border-box;
`;
const MedInfo = styled.div`
    display: flex;
    align-items:center;  
    padding: 10px;
`;
const Time = styled.div`    
    max-width: 328px; 
    height: auto;
    background-color: #06719D;
    border-radius: 10px 10px 0px 0px;
    color: white;
    text-align:center;
    h2{
        padding: 20px;     
    }
`;
const Icon1 = styled.div`
    flex: 1;
    text-align: center;
    img {
       fill: #F9C74F; 
       width:50px;
    }   
`;
const Icon2 = styled.div`
    flex: 1;
    text-align: center;
    img{
        width:40px;
    }
`;
const MedName = styled.div`
    flex: 1;
`;

const MedInfoBox = ({time, medName,dosage}) => {

    return <MedInfoCon>
        <Time> 
            <h2>{time}</h2>
        </Time>
        <MedInfo>
            <Icon1>
                <img src={Appearence} />
            </Icon1>
            <MedName>
                <h3>{medName}</h3>
                <p>{dosage}</p>
            </MedName>  
            <Icon2>
                <img src={CheckMark} />
            </Icon2>
        </MedInfo>
    </MedInfoCon>
}

MedInfoBox.defaultProps = {
    time: "8:30AM",
    medName:"Donepezil",
    dosage: "15mg, take 1"
}

export default MedInfoBox; 