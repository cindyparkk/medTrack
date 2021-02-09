import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  min-width: 414px;
  margin: 0;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 151px;
  background-color: ${(props) => (props.disable ? "#D9D9D9" : "#094D69")};

  cursor: pointer;
  border: none;
`;

const Text = styled.h1`
  color: #ffffff;
  text-transform: capitalize;
`;

const ButtonBig = ({ text, disable, onClick }) => {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setDisabled(disable);
  }, [disable]);

  return (
    <Container>
      <Button
        disable={disabled}
        onClick={() => {
          setDisabled(!disabled);
          onClick();
        }}
      >
        <Text>{text}</Text>
      </Button>
    </Container>
  );
};

ButtonBig.defaultProps = {
  text: "Apply",
  disable: false,
  onClick:()=>{}
};

export default ButtonBig;
