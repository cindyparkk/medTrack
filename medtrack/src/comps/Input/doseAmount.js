import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 100vw;
  padding: 10px;
  background-color: #e5e5e5;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin-bottom: 15px;
    margin-left: 15px;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  width: 100%;
`;
const Time = styled.input.attrs({
  type: "number",
  // value:"1",
  placeholder: "1",
  min: "1",
  max: "99",
})`
  color: #000000;
  cursor: pointer;
  margin-bottom: 0;
  width: 80%;
  border-radius: 5px;
  height: 45px;
  border-color: #094D69;
  box-shadow: 0px;
  outline: none;
  text-align: center;
`;
const Text = styled.h1``;

const Input = ({}) => {
  return (
    <Container>
      <Text>DOSE AMOUNT</Text>
      <Time />
    </Container>
  );
};

Input.defaultProps = {};
export default Input;
