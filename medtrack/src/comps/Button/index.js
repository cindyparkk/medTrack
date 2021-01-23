import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
width:100%;
margin:0;
`;

const NormalButton = styled.button`
display: inline-flex;
align-items: center;
justify-content: center;

min-width:308px;
min-height: 81px;
background:${props=>props.bgcolor ? props.bgcolor : "#094D69" };
border-radius: 10px;

cursor:pointer;
border: none;
`;

const Text = styled.h2`
color: #FFFFFF;
`;

const Button = ({text,bgcolor}) => {
    return <Container>
        <NormalButton color={bgcolor}>
            <Text>{text}</Text>
        </NormalButton>
    </Container>
};

Button.defaultProps = {
text:"Go to Home",
bgcolor: "none",
};

export default Button;