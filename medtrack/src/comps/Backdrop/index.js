import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 10;
    // display: ${props=>props.display ? props.display : "none"};
    position: absolute;
    top: 0;
    left: 0;
    // display: flex;
    // flex-direction: column;
`;

const Backdrop = ({display}) => {
    return <Container display={display}>
    </Container>
};

Backdrop.defaultProps = {
    display: null
};

export default Backdrop;