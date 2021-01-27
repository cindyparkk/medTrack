import React from 'react';
import styled from 'styled-components';



const Banner = styled.div`
    min-width: 414px;
    height: 80px;
    display:flex;
    align-items: center;
    background-color: #06719D;
    color:white;
    padding: 0px 30px 0px;
    text-align: center;
    justify-content: space-around;

`;

const Text = styled.h3`
    color: #FFFFFF;
    flex:1;
    text-align: center;
    // padding-right: 40px;
    // position:absolute;
    z-index: 1;
`;

const Sidetext = styled.h6`
    color: #FFFFFF;
    flex: 1;
    // padding-right: 350px;
    cursor: pointer;
    max-width: 20px;
    z-index: 5;
`;

const BannerCancel = ({text}) => {
    return <div>
        <Banner>
            <Sidetext>Cancel</Sidetext>
            <Text>{text}</Text>
            <div></div>
        </Banner>
        </div>
};

BannerCancel.defaultProps = {
text:"Edit Med",
};

export default BannerCancel;