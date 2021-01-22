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
    h4{
        margin-bottom: 0px;
    }
    img {
        width: 50px;
    }
`;
const OptionCon = styled.div`
    display: flex;
    align-content: center;
    text-align:center;
    align-items: center;
    & > div:nth-child(2){
        border-width: 1px;  
        border-style: solid;
        border-color: transparent #D9D9D9 ;
    }
`;
const Option = styled.div`
    flex: 1;
    max-width: 328px; 
    height: auto;
    padding: 25px 0px 10px; 
    img {
        width: 50px;
    }
    p {
        margin-top: 0px;
    }
`;

const Reminder = ({title, name, dosage, icon}) => {

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
            <Option>
                <img src={Skip} />
                <p>Skip</p>
            </Option>
            <Option>
                <img src={Reschedule} />
                <p>Reschedule</p>
            </Option>  
            <Option>
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