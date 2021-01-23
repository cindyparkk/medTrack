import React from 'react';
import styled from 'styled-components';

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
// flex:1;
    text-align: center;
    // padding-right: 40px;
position:absolute;
`;

const Sidetext = styled.h6`
color: #FFFFFF;
padding-right: 300px;
cursor:pointer;
`;

const BannerCancel = ({text}) => {
    return <Container>
        <Banner>
            <Sidetext>Cancel</Sidetext>
            <Text>{text}</Text>

        </Banner>
    </Container>
};

BannerCancel.defaultProps = {
text:"Edit Med",
};

export default BannerCancel;