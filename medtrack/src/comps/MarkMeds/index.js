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

const MarkMeds = ({}) => {

    return <MarkCon>
        <Title> 
            <h2>Mark Meds:</h2>
        </Title>
        <div>
            <Option>
                
                <h2>Take all</h2>
            </Option>
            <Option>
                
                <h2>Reschedule all</h2>
            </Option>  
            <Option>
                <h2>Skip all</h2>
            </Option>
        </div>
    </MarkCon>
}

MarkMeds.defaultProps = {
    
}

export default MarkMeds; 