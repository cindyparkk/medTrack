import React, {useState, useEffect} from 'react'; 
import styled from "styled-components"

const TitleContainer = styled.div`    
    max-width: 100vw; 
    max-height: 85px;
    padding: 20px;
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
    h4{
        margin-top: 0px;
    }
`;

const Title = ({username}) => {

    return <TitleContainer>
        <TitleText>
            <h1>Hello {username}</h1>
            <h4>Here's your med schedule:</h4>
        </TitleText>
    </TitleContainer>
}

Title.defaultProps = {
    username: "Guest"
}

export default Title; 