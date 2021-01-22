import React, {useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    min-width: 352px;
    min-height: 441px;
    background-color: #fff;
    border-radius: 10px;
    z-index: 100;
    display: ${props=>props.display ? props.display : "inline-flex"};
    flex-direction: column;
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

const ConfirmSubtitle = styled.p``;

const BottomCont = styled.div`
    display: inline-flex;
    flex-direction: column;   
    align-items: center;
    justify-content: center; 
    padding: 20px;
`;

const ConfirmImage = styled.img`
    min-width: 115px;
    height: auto;
`;

const Confirm = ({display, onDelete, title, subtitle, imgurl}) => {
    return <Container display={display}>
        <TopCont>
            <ConfirmTitle>{title}</ConfirmTitle>
            <ConfirmSubtitle>{subtitle}</ConfirmSubtitle>
        </TopCont>
        <BottomCont>
            <ConfirmImage src={imgurl}/>
        </BottomCont>
    </Container> 
};

Confirm.defaultProps = {
    display: null,
    onDelete:()=>{},
    title:"donepezil",
    subtitle:"was added successfully",
    imgurl: "/check-one.png"
};

export default Confirm;