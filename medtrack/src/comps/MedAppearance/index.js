import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Box = styled.div`
    min-height: 77px;
    width: 100%;
    border: 1px solid #D9D9D9;
    display: flex;
    // justify-content: space-around;
    padding-left: 20px;
    align-items: center;
background-color: #FFFFFF;
    & > * {
        margin: 0px 15px;
    }
`;

const Pills = styled.img`
    min-width: 40px;
    height: auto;
    cursor: pointer;
    fill: #06719D;

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
    border: ${props=>props.clicked ? "5px solid #06719D" : "none"};
`;

const MedAppearance = ({color}) => {

    const [clickedShape, setClickedShape] = useState();
    const [clicked, setClicked] = useState();
    const [color1, setColor1] = useState(false);
    const [color2, setColor2] = useState(false);
    const [color3, setColor3] = useState(false);
    const [color4, setColor4] = useState(false);
    const [color5, setColor5] = useState(false);

    const makeFill =() => {
        if (clickedShape == 1){
            setClickedShape()
        }
    }

    return <Container >
        <Box>
            <Pills src="/pill-circle.svg" clickedShape={clickedShape === 1} onClick={()=>{
                setClickedShape(1);
            }}></Pills>
            <Pills src="/pill.svg"></Pills>
        </Box>
        <Box>
            <Colors clicked={clicked === 1} onClick={()=>{
                setClicked(1);
            }}onChange={(e)=>{
                setColor1(e.target.clicked);
            }}></Colors>
            <Colors bgcolor="#F9C74F" clicked={clicked === 2} onClick={()=>{
                setClicked(2);
            }}
            onChange={(e)=>{
                setColor2(e.target.clicked);
            }}></Colors>
            <Colors bgcolor="#90BE6D" clicked={clicked === 3} onClick={()=>{
                setClicked(3);
            }}onChange={(e)=>{
                setColor3(e.target.clicked);
            }}></Colors>
            <Colors bgcolor="#F38EE3" clicked={clicked === 4} onClick={()=>{
                setClicked(4);
            }}onChange={(e)=>{
                setColor4(e.target.clicked);
            }}></Colors>
            <Colors bgcolor="#A255DF" clicked={clicked === 5} onClick={()=>{
                setClicked(5);
            }} onChange={(e)=>{
                setColor5(e.target.clicked);
            }}></Colors>
        </Box>
    </Container> 
};

MedAppearance.defaultProps = {

};

export default MedAppearance;