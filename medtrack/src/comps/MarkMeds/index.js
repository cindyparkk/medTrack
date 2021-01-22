import React, {useState, useEffect} from 'react'; 
import styled from "styled-components";
import Close from "../../public/close.png";
import Skip from "../../public/skipped.png";
import Reschedule from "../../public/stopwatch-colored.png";
import Take from "../../public/checked.png";

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
    align-items:center;
    color: white;
    h4 {
        flex:1;
        text-align: center;
        padding-right: 20px;
    }
    img {
        width:30px;
        height: 30px;
        padding-left: 10px;
    }
`;
const OptionCon = styled.div`
    & > div:nth-child(2){
        border-width: 1px;  
        border-style: solid;
        border-color: #D9D9D9 transparent;
    }
`;
const Option = styled.div`
    display: flex;
    max-width: 328px; 
    height: auto;
    padding: 10px 35px 10px;
    align-items:center;
    img {
        width:50px;
        height:auto;
        margin-right: 20px;
    }
`;

const MarkMeds = () => {

    return <MarkCon>
        <Title> 
            <img src={Close} />
            <h4>Mark Meds:</h4>
        </Title>
        <OptionCon>
            <Option>
                <img src={Take} />
                <h4>Take all</h4>
            </Option>
            <Option>
                <img src={Reschedule} />
                <h4>Reschedule all</h4>
            </Option>  
            <Option>
                <img src={Skip} />
                <h4>Skip all</h4>
            </Option>
        </OptionCon>
    </MarkCon>
}

MarkMeds.defaultProps = {
    
}

export default MarkMeds; 