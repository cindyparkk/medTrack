import React from 'react';
import styled from 'styled-components';


const Banner = styled.div`
min-width: 414px;
min-height: 80px;
display:flex;
align-items: center;
background-color: #06719D;
color:white;
padding: 0px 30px 0px;
text-align: center;
justify-content: center;
box-sizing:border-box;
`;

const Text = styled.h1`
    color: #FFFFFF;
    font-weight: 300;
`;

const BannerTime = ({text}) => {
    return <div>
        <Banner>
            <Text>{text}</Text>
        </Banner>
        </div>
};

BannerTime.defaultProps = {
text:"Today, Feb 10",
};

export default BannerTime;