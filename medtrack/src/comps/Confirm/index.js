import React, {useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    min-width: 352px;
    max-height: 441px;
    background-color: #fff;
    border-radius: 10px;
    z-index: 100;
    display: ${props=>props.display ? props.display : "block"};
    box-shadow: 0px 0px 10px #D9D9D9;
`;

const TopCont = styled.div`
    min-height: 77px;
    max-height: 100px;
    background: #06719D;
    border-radius: 10px 10px 0px 0px;
    text-align: center;
    color: #fff;
    display flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    & > * {
        margin: 0.2em 0;
    }
`;

const ConfirmTitle = styled.h4`
    text-transform: capitalize;
`;

const ConfirmSubtitle = styled.p`

`;

const Confirm = ({display, onDelete, title, subtitle}) => {
    return <Container display={display}>
        <TopCont>
            <ConfirmTitle>{title}</ConfirmTitle>
            <ConfirmSubtitle>{subtitle}</ConfirmSubtitle>
        </TopCont>
    </Container>
};

Confirm.defaultProps = {
    display: null,
    onDelete:()=>{},
    title:"donepezil",
    subtitle:"was added successfully"
};

export default Confirm;