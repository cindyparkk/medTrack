import React, { useState, useEffect } from "react";
import styled from "styled-components";
import StepWizard from "react-step-wizard";

const Banner = styled.div`
  min-width: 414px;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: #06719d;
  color: white;
  // padding: 0px 10px 0px;
  text-align: center;
  justify-content: space-around;
`;

const Text = styled.h3`
  color: #ffffff;
  flex: 1;
  text-align: center;
  // padding-right: 40px;
  // position: absolute;
  z-index: 1;
  text-transform: capitalize;
`;
const BackCont = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 20px;
  cursor: pointer;
  z-index: 5;
`;
const Sidetext = styled.h6`
  color: #ffffff;
  // padding-right: 400px;
  margin-left: -10px;
`;

const RotatedImg = styled.img`
  transform: rotate(90deg);
  cursor: pointer;
`;

const BannerBack = ({ text, onClick, disable, previousStep }) => {
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    setDisabled(disable);
  }, [disable]);

  return (
    <div>
      <Banner>
        <BackCont
          dis={disabled}
          onClick={() => {
            setDisabled(!disable);
            onClick();
          }}
>
          <RotatedImg src="/down-white.svg" />
          <Sidetext>Back</Sidetext>
        </BackCont>
        <Text>{text}</Text>
      </Banner>
    </div>
  );
};

BannerBack.defaultProps = {
  text: "Edit Med",
};

export default BannerBack;

