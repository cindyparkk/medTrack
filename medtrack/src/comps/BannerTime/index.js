import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
height:auto;
`;

const Banner = styled.button`
display: flex;
align-items: center;
justify-content: center;

min-width:414px;
min-height: 77px;
max-height: 100px;
background-color: "#06719D" ;

`;


const Text = styled.h1`
color: #FFFFFF;
`;

const BannerTime = ({text}) => {
    return <Container>
        <Banner>
            <Text>{text}</Text>
        </Banner>
    </Container>
};

BannerTime.defaultProps = {
text:"Today, Jan 6",
};

export default BannerTime;