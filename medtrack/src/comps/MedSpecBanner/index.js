import React from 'react';
import styled from 'styled-components';
// import Arrow from '../../public/down-white.svg';
// import Appearence from "../../public/pills-colored.png";


const Banner = styled.div`
max-width: 414px;
height: 245px;
display:flex;
align-items: center;
background-color: #094D69;
color:white;
padding: 0px 30px 0px;
text-align: center;
justify-content: center;
position: relative;




`;

const Text = styled.h4`
color: #FFFFFF;
    text-align: center;
    // padding-right: 40px;
// padding-right:300px;
`;

const Wrap = styled.div `
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
position:absolute;
`;
const Para = styled.p`
color: #FFFFFF;
    text-align: center;
    // padding-right: 40px;
    padding:0px 20px;
    margin:0;
width:150px;
`;
const BackCont = styled.div `
display: flex;
top: 8px;
left: 16px;
position: absolute;
align-items: center;


`
const Sidetext = styled.h6`
color: #FFFFFF;
// padding-right: 300px;
cursor:pointer;

`;

const RotatedImg = styled.img`
    transform: rotate(90deg) ;
    cursor:pointer;


`;

const PillImg = styled.img`
    border-radius:50%;
    background-color: white;
    width:68px;
    height: auto;
`;

const MedSpecBanner = ({medinfo,remindertext}) => {
    return <div>
        <Banner>
            <BackCont>
            <div>
            <RotatedImg src="/down-white.svg" />
            </div>
            <Sidetext>Back</Sidetext>
            </BackCont>
            <Wrap>
            <PillImg src="/pills-colored.png" />
            <Text>{medinfo}</Text>
            <Para>{remindertext}</Para>
            </ Wrap>
        </Banner>
    </div>
};

MedSpecBanner.defaultProps = {
medinfo:"Donepezil(15mg)",
remindertext:"Next Reminder: Tomorrow, 8:00AM"
};

export default MedSpecBanner;