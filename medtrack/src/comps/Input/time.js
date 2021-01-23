import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
  max-width: 100vw;
  background-color: #e5e5e5;
  display: inline-flex;
  flex-direction: column;
  h1 {
    margin-bottom: 0px;
    margin-left: 15px;
  }
`;

const TimeContainer = styled.div`
  flex-direction: column;
`;
const ButtonContainer = styled.div`
  background-color: #094d69;
  border-radius: 26px;
  display: inline-flex;
  margin: 10px;
`;
const TimeButton = styled.button`
  min-height: 40px;
  min-width: 70px;
  margin: 4px;
  padding: 10px;
  border-radius: 26px;
  border: none;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "#094d69")};
`;
const Time = styled.input.attrs({
  type: "time",
  value: "8:00",
  step: "900",
})`
  color: #000000;
  cursor: pointer;
  margin-bottom: 0;
  text-transform: uppercase;
  max-width: 100%;
  border-radius: 5px;
  height: 35px;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  text-align: center;
`;
const Text = styled.h1``;
const Input = ({}) => {
  const [clickedForm, setClickedForm] = useState("AM");
  const HandleContainerSelect = (name) => {
    // alert("clicked container "+name);
    setClickedForm(name);
  };
  return (
    <Container>
      <TimeContainer>
        <Text>TIME</Text>
        <ButtonContainer>
          <TimeButton
            onContainerSelect={HandleContainerSelect}
            name="AM"
            bgcolor={clickedForm === "AM" ? "#63AAC8" : "#094D69"}
          >
            AM
          </TimeButton>
          <TimeButton
            onContainerSelect={HandleContainerSelect}
            name="PM"
            bgcolor={clickedForm === "PM" ? "#63AAC8" : "#094D69"}
          >
            PM
          </TimeButton>
        </ButtonContainer>
        <Time />
      </TimeContainer>
    </Container>
  );
};

Input.defaultProps = {};
export default Input;
