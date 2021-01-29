import React from 'react';
import styled from 'styled-components';

const Banner = styled.div`
    min-width: 414px;
    height: 80px;
    display:flex;
    align-items: center;
    background-color: #06719D;
    color:white;
    // padding: 0px 10px 0px;
    text-align: center;
    justify-content: space-around;
`;

const Text = styled.h3`
    color: #FFFFFF;
    flex: 1;
    text-align: center;
    // padding-right: 40px;
    // position: absolute;
    z-index: 1;
    text-transform: capitalize;
`;
const BackCont = styled.div `
    display: flex;
    align-items: center;
    flex: 1;
    max-width: 20px;
    cursor:pointer;
    z-index: 5;
`
const Sidetext = styled.h6`
    color: #FFFFFF;
    // padding-right: 400px;
    margin-left: -10px;
`;

const RotatedImg = styled.img`
    transform: rotate(90deg) ;
    cursor:pointer;
`;

const BannerBack = ({text, onClick}) => {
    return <div>
        <Banner>
            <BackCont onClick={onClick}>
                <RotatedImg src="/down-white.svg" />
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