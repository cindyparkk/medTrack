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
    min-height: 100px;
    background: #06719D;
    border-radius: 10px 10px 0px 0px;
`;

const Confirm = ({display, onDelete}) => {
    return <Container display={display}>
        <TopCont></TopCont>
    </Container>
};

Confirm.defaultProps = {
    display: null
};

export default Confirm;