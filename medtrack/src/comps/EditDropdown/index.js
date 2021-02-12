import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "comps/Button";

const Container = styled.div`
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  backgroun-color: #fff;
`;
const ContainerInner = styled.div`
  max-width: 100vw;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  // margin: 10px 0;
  text-align: left;
  background-color: #fff;
  padding: 10px 0px;
  cursor: pointer;
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

const Title = styled.h5`
  margin: 0px 10px;
  padding: 0px;
  text-transform: capitalize;
`;
const Subtext = styled.p`
  margin: 5px 11px;
  padding: 0px;
  text-transform: capitalize;
`;
const Divide = styled.hr`
  display: ${(props) => (props.display ? props.display : "block")};
  height: 1px;
  border: 0;
  border-top: 2px solid #d9d9d9;
  margin: 1px 0;
  padding: 0;
`;

const Dropdown = styled.div`
  padding: 10px;
  display: flex;
  height: auto;
  box-sizing: border-box;
  background-color: #ffff;
  display: ${(props) => (props.expanded ? "flex" : "none")};
  opacity: ${(props) => (props.expanded ? 1 : 0)};
  height: ${(props) => (props.expanded ? "auto" : "0px")};
  transition: opacity 0.3s;
  align-items:center:
    input {
    min-width: 200px;
    max-height: 20px;
  }
  button {
    max-height: 40px;
    min-height: 30px;
  }
`;

const EditDropdown = ({
  leftimgurl,
  title,
  subtext,
  rightimgurl,
  display,
  dosage,
  unit,
  onClick,
  onComplete,
  onFill,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [filled, setFill] = useState();

function ontimeupdate(value) {
this.setFill({
subtext: this.props.subtext,
dosage: this.props.dosage,
unit: this.props.unit
});
this.updateThings = this.updateThings.bind(this)
}

  return (
    <Container>
      <ContainerInner>
        <IconLeft src={leftimgurl} />
        <InnerContainer>
          <Title>{title}</Title>
          <Subtext 
          // onChange={(e)}
          >
            {subtext} {dosage}
            {unit}
          </Subtext>
        </InnerContainer>
        <IconRight
          onClick={() => {
            setExpanded(!expanded);
          }}
          src={rightimgurl}
        />
      </ContainerInner>
      <Divide />
      <Dropdown expanded={expanded}>
        <input type="text"
         onChange={e =>
            this.ontimeupdate(e.target.value),
            console.log("filled",filled)}
        />
        <Button
          text="Update"
          width="20px"
          margin="20px"
          height="55px"
          onClick={(filled) => {
            onComplete(filled);
            // console.log(filled);
          }}
        />
      </Dropdown>
    </Container>
  );
};

EditDropdown.defaultProps = {
  leftimgurl: "",
  rightimgurl: "",
  title: "Title Content",
  subtext: "08:00 AM",
  dosage: "15",
  unit: "mg",
};
export default EditDropdown;
