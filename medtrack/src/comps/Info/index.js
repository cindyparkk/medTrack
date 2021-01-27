import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 100vw;
  display: inline-flex;
  flex-direction: column;
`;
const ContainerInner = styled.div`
  max-width: 100vw;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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

const Title = styled.h1`
  margin: 0px 10px;
  padding: 0px;
`;
const Subtext = styled.p`
  margin: 5px 11px;
  padding: 0px;
`;
const Divide = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 2px solid #ccc;
  margin: 1px 0;
  padding: 0;
`;

const Info = ({ leftimgurl, title, subtext, rightimgurl }) => {
  return (
    <Container>
      <ContainerInner>
        <IconLeft src={leftimgurl} />
        <InnerContainer>
          <Title>{title}</Title>
          <Subtext>{subtext}</Subtext>
        </InnerContainer>
        <IconRight src={rightimgurl} />
      </ContainerInner>
      <Divide />
    </Container>
  );
};

Info.defaultProps = {
  leftimgurl: "/stopwatch.png",
  rightimgurl: "/right.png",
  title: "Title Content",
  subtext: "08:00 AM/15mg",
};
export default Info;
