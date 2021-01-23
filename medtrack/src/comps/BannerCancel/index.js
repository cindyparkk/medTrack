import React from 'react';
import styled from 'styled-components';



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
// flex:1;
    text-align: center;
    // padding-right: 40px;
position:absolute;
`;

const Sidetext = styled.h6`
color: #FFFFFF;
padding-right: 350px;
cursor:pointer;
`;

const BannerCancel = ({text}) => {
    return <div>
        <Banner>
            <Sidetext>Cancel</Sidetext>
            <Text>{text}</Text>

        </Banner>
        </div>
};

BannerCancel.defaultProps = {
text:"Edit Med",
};

export default BannerCancel;