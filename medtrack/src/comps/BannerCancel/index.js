import React from 'react';
import styled from 'styled-components';

const Banner = styled.div`
    min-width: 414px;
    min-height: 80px;
    display:flex;
    align-items: center;
    background-color: #06719D;
    color:white;
    // padding: 10px 0px 10px;
    text-align: center;
    justify-content: space-around;
`;

const Text = styled.h3`
    color: #FFFFFF;
    flex:10;
    text-align: center;
    // padding-right: 40px;
    // position:absolute;
    z-index: 1;
    text-transform: capitalize;
    word-wrap: break-word;
    max-width: 200px;
    // padding: 10px 0px;
`;

const Sidetext = styled.h6`
    color: #FFFFFF;
    flex: 1;
    // padding-right: 350px;
    cursor: pointer;
    max-width: 20px;
    z-index: 5;
    margin-left: -20px;
`;

const BannerCancel = ({text, onClick}) => {
    return <Banner>
            <Sidetext onClick={onClick}>Cancel</Sidetext>
            <Text>{text}</Text>
            <div></div>
        </Banner>
};

BannerCancel.defaultProps = {
    text:"Edit Med",
};

export default BannerCancel;