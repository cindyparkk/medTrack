import React, {useState, useEffect} from 'react'; 
import styled from "styled-components"

const TitleContainer = styled.div`    
    max-width: 100vw; 
    max-height: 85px;
`;
const TitleText = styled.div`
    display: flex;
    flex-direction: column;
    align-item: left;
    text-align: left; 
    align-content: center;    
    h1{
        margin-bottom: 0px;
    }
    p{
        margin-top: 0px;
    }
`;

const Title = ({Username}) => {

    return <TitleContainer>
        <TitleText>
            <h1>Hello {Username}</h1>
            <p>Here's yout med schedule:</p>
        </TitleText>
    </TitleContainer>
}

Title.defaultProps = {
    Username: "Guest"
}

export default Title; 