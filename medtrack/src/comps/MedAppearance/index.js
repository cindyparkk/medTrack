import React, {useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Box = styled.div`
    min-height: 77px;
    border: 1px solid #D9D9D9;
    display: flex;
    padding-left: 50px;
    align-items: center;

    & > * {
        margin: 0px 30px;
    }
`;

const Pills = styled.img`
    min-width: 40px;
    height: auto;
    cursor: pointer;

    &:hover {
        fill: #06719D;
    }
`;

const Colors = styled.div`
    border-radius: 50%;
    min-width: 40px;
    height: 40px;
    background-color: ${props=>props.bgcolor ? props.bgcolor : "#E56B6F"};
    cursor: pointer;
    border: ${props=>props.clickedColor ? "5px solid #06719D" : "none"};
`;

const MedAppearance = ({color}) => {

    const [clickedShape, setClickedShape] = useState();
    const [clickedColor, setClickedColor] = useState("");

    return <Container >
        <Box>
            <Pills src="/pill-circle.svg"></Pills>
            <Pills src="/pill.svg"></Pills>
        </Box>
        <Box>
            <Colors clickedColor={clickedColor === "red"} oncClick={()=>{
                setClickedColor("red");
            }}></Colors>
            <Colors bgcolor="#F9C74F" clickedColor={clickedColor === 2} oncClick={()=>{
                setClickedColor(2);
            }}></Colors>
            <Colors bgcolor="#90BE6D" clickedColor={clickedColor === 3} oncClick={()=>{
                setClickedColor(3);
            }}></Colors>
            <Colors bgcolor="#F38EE3" clickedColor={clickedColor === 4} oncClick={()=>{
                setClickedColor(4);
            }}></Colors>
            <Colors bgcolor="#A255DF" clickedColor={clickedColor === 5} oncClick={()=>{
                setClickedColor(5);
            }}></Colors>
        </Box>
    </Container> 
};

MedAppearance.defaultProps = {

};

export default MedAppearance;