import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  min-width: 90%;
  // padding: 10px;
  // background-color: #e5e5e5;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  // align-items: center;
  // h1 {
  //   margin-bottom: 15px;
  //   margin-left: 15px;
  // }
`;

const Wrapper = styled.div`
  min-width: 90%;
 display: flex;
 align-items: center;
`;

const Texttwo = styled.div`
margin-left: 4%;
  `;


const Time = styled.input.attrs({
  type: "number",
  // value:"1",
  placeholder: "number",
  min: "1",
  max: "99",
})`
  // color: #000000;
  cursor: pointer;
  margin-bottom: 0;
  min-width: 70%;
  border-radius: 5px;
  height: 45px;
  // border-color: #094D69;
  border: 1px solid #094D69;
  box-shadow: 0px;
  outline: none;
  text-align: right;
  padding-right: 20px;
  font-size: 18px;
`;
const Text = styled.h6`
  text-align: left;
  margin: 20px 0px;
`;

const HowOftenInput = ({}) => {
  return (
    <Container>
      <Text>EVERY:</Text>
      <Wrapper>
      <Time />
      <Texttwo>
      <h6>Days</h6>
      </Texttwo>
      </Wrapper>
    </Container>
  );
};

HowOftenInput.defaultProps = {};
export default HowOftenInput;
