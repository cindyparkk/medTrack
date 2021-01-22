import React, {useState, useEffect} from 'react'; 
import styled from "styled-components";
import Close from "../../public/close.png";
import Edit from "../../public/edit.png";
import Delete from "../../public/delete.png";
import Appearence from "../../public/pills-colored.png";
import Skip from "../../public/skipped.png";
import Reschedule from "../../public/stopwatch-colored.png";
import Take from "../../public/checked.png";

const ReminderCon = styled.div`    
    max-width: 328px; 
    height: auto;
    border-radius: 10px;
    box-sizing:border-box;
    box-shadow: 0px 0px 10px #D9D9D9;
`;
const Title = styled.div`
    display: flex;
    padding: 10px;
    background-color: #06719D;
    border-radius: 10px 10px 0px 0px;
    color: white;
    align-items:center;
    h4 {
        flex:1;
        text-align: center;
        padding-left:10px;
    }
    img {
        width:28px;
        height:28px;
        padding: 0px 5px 0px;
        cursor:pointer;
    }
`;
const MedInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align:center;
    align-items: center;
    padding: 10px;
    border-width: 1px;  
    border-style: solid;
    border-color: #D9D9D9 transparent;
    background-color: #FFFF;
    h4{
        margin-bottom: 0px;
    }
    img {
        width: 50px;
    }
`;
const OptionCon = styled.div`
    display: flex;
    text-align:center;
    align-items: center;
    background-color: #FFFF;
    border-radius: 0px 0px 10px 10px;
    & > div:first-child{
        border-radius: 0px 0px 0px 10px;
    }
    & > div:nth-child(2){
        border-width: 1px;  
        border-style: solid;
        border-color: transparent #D9D9D9 ;
    }
    & > div:last-child{
        border-radius: 0px 0px 10px 0px;
    }
`;
const Option = styled.div`
    flex: 1;
    max-width: 328px; 
    height: auto;
    padding: 25px 0px 10px; 
    cursor: pointer;
    img {
        width: 50px;
    }
    p {
        margin-top: 0px;
    }
    background-color: ${props=>props.clicked ? "rgba(217, 217, 217, 0.3)" : "none"};
`;

const Reminder = ({title, name, dosage}) => {

    const[clicked, setClicked] = useState();

    return <ReminderCon>
        <Title> 
            <img src={Close} />
            <h4>{title}</h4>
            <img src={Edit} />
            <img src={Delete} />
        </Title>

        <MedInfo>
            <img src={Appearence} />
            <h4>{name}</h4>
            <p>{dosage}</p>
        </MedInfo> 

        <OptionCon>
            <Option clicked={clicked === 1} onClick={() => {
               setClicked(1);
           }}>
                <img src={Skip} />
                <p>Skip</p>
            </Option>
            <Option clicked={clicked === 2} onClick={() => {
               setClicked(2);
           }}>
                <img src={Reschedule} />
                <p>Reschedule</p>
            </Option>  
            <Option clicked={clicked === 3} onClick={() => {
               setClicked(3);
           }}>
                <img src={Take} />
                <p>Take</p>
            </Option>
        </OptionCon>   
    </ReminderCon>
}

Reminder.defaultProps = {
    title: "Reminder", 
    name: "Donepezil",
    dosage: "15mg, take 1",
}

export default Reminder; 