import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
width:100%;
margin:0;
`;

const Button = styled.button`
display: inline-flex;
align-items: center;
justify-content: center;

min-width:414px;
min-height: 151px;
background-color:${props=>props.bgcolor ? props.bgcolor : "#094D69" };

cursor:pointer;
border: none;
`;

const Text = styled.h1`
color: #FFFFFF;
`;

const ButtonBig = ({text,bgcolor}) => {
    return <Container>
        <Button color={bgcolor}>
            <Text>{text}</Text>
        </Button>
    </Container>
};

ButtonBig.defaultProps = {
text:"Apply",
bgcolor: "none",
};

export default ButtonBig;