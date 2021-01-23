import React, {useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Box = styled.div`
    min-height: 77px;
    border: 1px solid #D9D9D9;
`;

const Pills = styled.img`
    min-width: 40px;
    height: auto;
`;

const MedAppearance = ({}) => {
    return <Container >
        <Box>
            <Pills></Pills>
        </Box>
        <Box></Box>
    </Container> 
};

MedAppearance.defaultProps = {

};

export default MedAppearance;