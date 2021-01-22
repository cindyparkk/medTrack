import React, {useState, useEffect} from 'react'; 
import styled from "styled-components";
import Appearence from "../../public/pills-colored.png";
import CheckMark from "../../public/checked.png";
import MoreDetails from "../../public/more.svg";

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
    padding: 10px 20px 10px;
`;
const Time = styled.div`    
    max-width: 328px; 
    height: auto;
    background-color: #06719D;
    border-radius: 10px 10px 0px 0px;
    color: white;
    align-items:center;  
    display: flex;
    padding: 10px;
    h2{
        flex: 1;
        text-align:center;
        padding-left: 20px;
    }
    img {
        width: 50px;
        height:auto;
    }
`;
const Icon1 = styled.div`
    flex: 1;
    text-align: center; 
    img {
       width:50px;
    }   
`;
const Icon2 = styled.div`
    flex: 1;
    text-align: center;
    img{
        width:35px;
    }
`;
const MedName = styled.div`
    flex: 2;
    padding-left: 20px;
`;

const MedInfoBox = ({time, medName,dosage}) => {

    return <MedInfoCon>
        <Time> 
            <h2>{time}</h2>
            <img src={MoreDetails} />
        </Time>
        <MedInfo>
            <Icon1>
                <img src={Appearence} />
            </Icon1>
            <MedName>
                <h4>{medName}</h4>
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