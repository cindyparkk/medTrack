import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    jusitfy-content: space-between;
    align-items: center;
    min-width: 400px;
`;

const Crumb = styled.div`
    border-radius: 50%;
    background-color: ${props=>props.num ? "#D9D9D9" : "#094D69"};
    width: 24px;
    height: 24px;
    margin-right: 10px;
`;

const Breadcrumb = ({num}) => {
    return <Container>
        <Crumb />
        <Crumb />
        <Crumb />
        <Crumb />
        <Crumb />
        <Crumb />
        <Crumb />
        <Crumb />
    </Container>
};

Breadcrumb.defaultProps = {
    
};

export default Breadcrumb;