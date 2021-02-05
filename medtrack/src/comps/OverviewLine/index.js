import React, {useState, useEffect} from 'react'; 
import styled, {css} from "styled-components";

const Container = styled.div`
    min-width: 414px;
    display: flex;
    flex-direction: column;
    margin: 0;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px;
`;

const Label = styled.h6`
    text-transform: uppercase;
    margin: 15px;
`;

// const Option = styled.option`
//     text-transform: capitalize;
//     background-color: #dad;
// `;

const Option = styled.div`
    // min-width: 414px;
    height: 70px;
    border: 1px solid #D9D9D9;
    align-items:center;
    text-align: left;
    display: flex;
    padding: 0px 30px 0px 25px;
    background-color: #FFFFF;
    h5 {
        flex: 1;
    }
    margin: -1px;
    cursor: pointer;
`;

const CheckMark = styled.img`
    display: flex;
    width: 45px;
    height: auto;
    margin-right:-15px;

`;

const Text = styled.h5`
    // text-transform: ${props=>props.textTransform ? props.textTransform : "capitalize"};
    color: black;
`;

const TextTwo = styled.h5`
// position: absolute;
// right:200px;
color: #979797;
`;


const OverviewLine = ({text, text2, optionSelect, onClick}) => {

    // const [clicked, setClicked] = useState();
    // const [option, setOption1] = useState();
    // const[selected, setSelected] = useState(false);

    return <Container onClick={onClick}>
        <Option>
               <Text>{text}</Text>
               <TextTwo>{text2}</TextTwo>
               <CheckMark src="/right.png" />
        </Option>
    </Container> 
};

// if option[n] dne, do not show

OverviewLine.defaultProps = {
    text:"Once a Day",
    text2:"Days Interval",
};

export default OverviewLine;