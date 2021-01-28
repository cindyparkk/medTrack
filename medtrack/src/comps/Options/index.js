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
    height: 70px;
    border: 1px solid #D9D9D9;
    align-items:center;
    text-align: left;
    display: flex;
    padding: 0px 30px 0px 75px;
    background-color: ${props=>props.selected ? "#094D69" : "#fff"};
    h5 {
        flex: 1;
    }
    ${props=>props.reMove === true && css`
        display: none;
    `}
    margin: -1px;
    cursor: pointer;
`;

const CheckMark = styled.img`
    display:${props=>props.selected ? "flex" : "none"};
    width: 30px;
    height: auto;
`;

const Text = styled.h5`
    text-transform: ${props=>props.textTransform ? props.textTransform : "capitalize"};
    color: ${props=>props.selected ? "#fff" : "000"};
`;

const Options = ({text, textTransform, optionSelect}) => {

    const [clicked, setClicked] = useState();
    const [option, setOption1] = useState();
    const[selected, setSelected] = useState(false);

    return <Container >
        <Option selected={selected === true} onClick={() => {
               setSelected(!selected);
           }}>
               <Text selected={selected === true} textTransform={textTransform}>{text}</Text>
               <CheckMark selected={selected === true} src="/select.png" />
        </Option>
        {/* <Form>
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
        </Form> */}

    </Container> 
};

// if option[n] dne, do not show

Options.defaultProps = {
    text:"alzheimer's",
    textTransform: null
};

export default Options;