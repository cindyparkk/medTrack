import React, {useState, useEffect} from 'react'; 
import styled, {css} from "styled-components";

const Container = styled.div`
    min-width: 414px;
    display: flex;
    flex-direction: column;
    margin: 0;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px;
`;

const Label = styled.h6`
    text-transform: uppercase;
    margin: 15px;
`;

// const Option = styled.option`
//     text-transform: capitalize;
//     background-color: #dad;
// `;

const Option = styled.div`
    // min-width: 414px;
    height: 80px;
    border: 1px solid #D9D9D9;
    align-items:center;
    text-align: left;
    display: flex;
    padding: 0px 30px 0px 75px;
    background-color: #FFFFF;
    // h5,p {
    //     flex: 1;
    // }
    margin: -1px;
    cursor: pointer;
`;

const CheckMark = styled.img`
    display: flex;
    width: 45px;
    height: auto;
    right:30px;
    position:absolute;
`;

const Wrapper = styled.div`
// display: flex;
flex-direction: column;
`;

const Text = styled.h5`
margin: 0px 10px;
padding: 0px;
`;

const TextTwo = styled.p`
    // text-transform: ${props=>props.textTransform ? props.textTransform : "capitalize"};
    margin: 5px 11px;
  padding: 0px;

`;

const OverviewTime = ({text, text2, optionSelect, onClick}) => {

    // const [clicked, setClicked] = useState();
    // const [option, setOption1] = useState();
    // const[selected, setSelected] = useState(false);

    return <Container >
        <Option>
        <Wrapper>
               <Text>{text}</Text>
               <TextTwo>{text2}</TextTwo>
      </Wrapper>
               <CheckMark src="/right.png" />
        </Option>
        

    </Container> 
};

// if option[n] dne, do not show

OverviewTime.defaultProps = {
    text:"8:00AM",
    text2:"Take 1 pills",
};

export default OverviewTime;