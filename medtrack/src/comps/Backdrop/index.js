import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 0;
    display: ${props=>props.display ? props.display : "block"};
    position: absolute;
    top: 0;
    left: 0;
`;

const Backdrop = ({display}) => {
    return <Container display={display}>
    </Container>
};

Backdrop.defaultProps = {
    display: null
};

export default Backdrop;