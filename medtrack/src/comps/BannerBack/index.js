import React from 'react';
import styled from 'styled-components';
// import Arrow from '../../../public/down-white.svg';


const Banner = styled.div`
max-width: 414px;
height: 80px;
display:flex;
align-items: center;
background-color: #06719D;
color:white;
padding: 0px 30px 0px;
text-align: center;
justify-content: center;



`;

const Text = styled.h3`
color: #FFFFFF;
    text-align: center;
    // padding-right: 40px;
    position: absolute;

`;
const BackCont = styled.div `
display: flex;
align-items: center;

`
const Sidetext = styled.h6`
color: #FFFFFF;
padding-right: 400px;
cursor:pointer;
`;

const RotatedImg = styled.img`
    transform: rotate(90deg) ;
    cursor:pointer;


`;

const BannerBack = ({text}) => {
    return <div>
        <Banner>
            <BackCont>
            <div>
            <RotatedImg src="/down-white.svg" />
            </div>
            <Sidetext>Back</Sidetext>
            </BackCont>
            <Text>{text}</Text>

        </Banner>
    </div>
};

BannerBack.defaultProps = {
text:"Edit Med",
};

export default BannerBack;