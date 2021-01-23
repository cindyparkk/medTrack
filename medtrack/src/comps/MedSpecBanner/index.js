import React from 'react';
import styled from 'styled-components';
// import Arrow from '../../public/down-white.svg';
// import Appearence from "../../public/pills-colored.png";


const Container = styled.div`
width:100%;
margin:0;
display:flex;

`;

const Banner = styled.button`
display: inline-flex;
align-items: center;
justify-content: center;
;
min-width:414px;
min-height: 245px;

background-color: "#06719D" ;

border: none;
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

`;
const Para = styled.p`
color: #FFFFFF;
    text-align: center;
    // padding-right: 40px;
    padding:0px 20px;

`;
const BackCont = styled.div `
display: flex;
margin-left:-80px;
margin-top:-150px;

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
    return <Container>
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
    </Container>
};

MedSpecBanner.defaultProps = {
medinfo:"Donepezil(15mg)",
remindertext:"Next Reminder: Tomorrow, 8:00AM"
};

export default MedSpecBanner;