import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 10px 0px;
`;

const NormalButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-width: 308px;
  min-height: 81px;
  // background-color: #094D69;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "#094D69")};

  border-radius: 10px;

  cursor: pointer;
  border: none;

  &:hover, &:select {
    opacity: 0.8;
    transition: opacity 0.2s;
  }
`;

const Text = styled.h2`
  color: #ffffff;
`;

const Button = ({ text, bgcolor, onClick }) => {
  return (
    <Container onClick={onClick}>
      <NormalButton bgcolor={bgcolor}>
        <Text>{text}</Text>
      </NormalButton>
    </Container>
  );
};

Button.defaultProps = {
  text: "Go to Home",
  bgcolor: null,
};

export default Button;
