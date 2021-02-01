import React, { useState, useEffect } from "react";
import styled from "styled-components";

const MedInfoCon = styled.div`
  max-width: 100vw;
  height: auto;
  box-sizing: border-box;
  background-color: #fff;
`;
const MedInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px 10px;
`;
const Icon1 = styled.div`
  flex: 1;
  text-align: center;
  img {
    width: 50px;
  }
`;
const IconRight = styled.img`
  max-height: 45px;
  width: auto;
  padding-left: 15px;
  margin: 0px;
`;
const MedName = styled.div`
  flex: 2;
  padding-left: 20px;
`;

const ListMeds = ({ medName, time, onClick }) => {
  return (
    <MedInfoCon onClick={onClick}>
      <MedInfo>
        <Icon1>
          <img src="/pills-colored.png" />
        </Icon1>
        <MedName>
          <h4>{medName}</h4>
          <p>Next Reminder:</p>
          <p>{time}</p>
        </MedName>
        <IconRight src="/right.png" />
      </MedInfo>
    </MedInfoCon>
  );
};

ListMeds.defaultProps = {
  time: "8:30AM",
  medName: "Donepezil",
};

export default ListMeds;
