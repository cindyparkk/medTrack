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


const Info = ({}) => {
    return (
      <Container>

      </Container>
    );
  };
  
  Info.defaultProps = {};
  export default Info;
  