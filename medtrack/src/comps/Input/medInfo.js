import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 100vw;
  min-width: ${(props) => (props.width ? props.width : "50vw")};
  padding: 10px;
  background-color: #e5e5e5;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin-bottom: 15px;
    margin-left: 10px;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 10px;
`;
const ConfirmImage = styled.img`
  margin-top: 20px;
  max-height: 40px;
  width: auto;
`;
const Time = styled.input.attrs({
  type: "text",
  // value:"1",
  placeholder: "Enter Medical Name",
})`
  margin-left: -50px;
  color: #000000;
  cursor: pointer;
  margin-bottom: 0;
  min-width: 80%;
  border-radius: 5px;
  height: 45px;
  border-color: #094D69;
  box-shadow: 0px;
  outline: none;
  text-align: center;
`;
const Text = styled.h6``;

const Input = ({ imgurl }) => {
  return (
    <Container>
      <InnerContainer>
        <ConfirmImage src={imgurl} />
        <Text>MED INFO</Text>
      </InnerContainer>
      <Time />
    </Container>
  );
};

Input.defaultProps = {
  imgurl: "/file-text.png",
};

export default Input;
