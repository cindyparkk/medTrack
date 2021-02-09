import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  backgroun-color: #fff;
`;
const ContainerInner = styled.div`
  max-width: 100vw;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  // margin: 10px 0;
  text-align: left;
  background-color: #fff;
  padding: 10px 0px;
`;

const IconLeft = styled.img`
  max-height: 35px;
  width: auto;
  padding: 0px 15px;
`;
const IconRight = styled.img`
  max-height: 45px;
  width: auto;
  padding-left: 15px;
  margin: 0px;
`;

const InnerContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Title = styled.h5`
  margin: 0px 10px;
  padding: 0px;
  text-transform: capitalize;
`;
const Subtext = styled.p`
  margin: 5px 11px;
  padding: 0px;
  text-transform: capitalize;
`;
const Divide = styled.hr`
  display: ${(props) => (props.display ? props.display : "block")};
  height: 1px;
  border: 0;
  border-top: 2px solid #d9d9d9;
  margin: 1px 0;
  padding: 0;
`;

const Info = ({ leftimgurl, title, subtext, rightimgurl, display, dosage, unit }) => {
  return (
    <Container>
      <ContainerInner>
        <IconLeft src={leftimgurl} />
        <InnerContainer>
          <Title>{title}</Title>
          <Subtext>{subtext} {dosage}{unit}</Subtext>
        </InnerContainer>
        <IconRight src={rightimgurl} />
      </ContainerInner>
      <Divide />
    </Container>
  );
};

Info.defaultProps = {
  leftimgurl: "",
  rightimgurl: "",
  title: "Title Content",
  subtext: "08:00 AM",
  dosage: "15",
  unit:"mg"
};
export default Info;
