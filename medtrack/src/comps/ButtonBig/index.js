import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div`
   min-width: 414px;
    margin: 0;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    min-height: 151px;
    background-color:${props=>props.dis ? "#094D69" : "#D9D9D9" };

    cursor:pointer;
    border: none;
`;

const Text = styled.h1`
    color: #FFFFFF;
    text-transform: capitalize;
`;

const ButtonBig = ({text, disable}) => {

    const[disabled, setDisabled] = useState(false);

    useEffect(()=>{
        setDisabled(disable)
    }, [disable]);

    return <Container>
        <Button dis={disabled} onClick={()=>{
            setDisabled(!disabled);
        }}>
            <Text>{text}</Text>
        </Button>
    </Container>
};

ButtonBig.defaultProps = {
    text:"Apply",
    disable: false
};

export default ButtonBig;