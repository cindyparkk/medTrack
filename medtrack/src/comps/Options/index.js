import React, {useState, useEffect} from 'react'; 
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px;
`;

const Label = styled.h6`
    text-transform: uppercase;
    margin-bottom: 15px;
`;

const Option = styled.option`
    text-transform: capitalize;
    background-color: #dad;
`;

const Options = ({text, option1, option2, option3, optionSelect}) => {

    const [clicked, setClicked] = useState();
    const [option, setOption1] = useState();

    return <Container >
        <Form>
            <Label>{text}</Label>
            <select>
                <Option clicked={clicked} onClick={()=>{
                    optionSelect("option 1")
                }}
                // onChange={(e)=>{
                //     setOption1(e.target.clicked);
                //     console.log(option1);
                // }}
                >{option1 ? option1 : null}</Option>
                <Option onClick={()=>{
                    optionSelect("option 2")
                }}>{option2 ? option2 : null}</Option>
                <Option>{option3 ? option3 : null}</Option>
            </select>
        </Form>
    </Container> 
};

// if option[n] dne, do not show

Options.defaultProps = {
    text: "medical conditions"
};

export default Options;