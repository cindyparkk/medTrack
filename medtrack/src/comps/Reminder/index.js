import React, {useState, useEffect} from 'react'; 
import styled from "styled-components";


const MarkCon = styled.div`    
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
    h2 {
        flex:1;
        text-align: center;
    }
`;
const Option = styled.div`
    flex: 1;
    max-width: 328px; 
    height: auto;
    padding: 5px;
    
`;

const ReminderBox = ({name, dosage}) => {

    return <MarkCon>
        <Title> 
            <h2>Reminder</h2>
        </Title>
        <div>
            <Option>
                <h2>{name}</h2>
                <p>{dosage}</p>
            </Option>
            <Option>
                
                <p>Skip</p>
            </Option>
            <Option>
                
                <p>Reschedule</p>
            </Option>  
            <Option>

                <p>Take</p>
            </Option>
        </div>
    </MarkCon>
}

ReminderBox.defaultProps = {
    name: "Donepezil",
    dosage: "15mg, take 1",
}

export default ReminderBox; 