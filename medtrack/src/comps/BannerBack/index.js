import React from 'react';
import styled from 'styled-components';
// import Arrow from '../../../public/down-white.svg';

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
min-height: 77px;
max-height: 100px;

background-color: "#06719D" ;

border: none;
`;

const Text = styled.h3`
color: #FFFFFF;
    text-align: center;
    // padding-right: 40px;
    position: absolute;

`;
const BackCont = styled.div `
display: flex;

`
const Sidetext = styled.h6`
color: #FFFFFF;
padding-right: 300px;
cursor:pointer;
`;

const RotatedImg = styled.img`
    transform: rotate(90deg) ;
    cursor:pointer;


`;

const BannerBack = ({text}) => {
    return <Container>
        <Banner>
            <BackCont>
            <div>
            <RotatedImg src="/down-white.svg" />
            </div>
            <Sidetext>Back</Sidetext>
            </BackCont>
            <Text>{text}</Text>

        </Banner>
    </Container>
};

BannerBack.defaultProps = {
text:"Edit Med",
};

export default BannerBack;