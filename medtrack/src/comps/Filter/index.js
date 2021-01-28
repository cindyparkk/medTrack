import React, {useState, useEffect} from 'react'; 
import styled, {css} from "styled-components";

const Container = styled.div`
    min-width: 414px;
`;

const FilterBox = styled.div`
    min-width: 414px;
    height: 80px;
    box-sizing:border-box;
    display:flex;
    align-items: center;
    cursor:pointer;
    background-color: #094D69;
    color:white;
    padding: 0px 30px 0px;
    h5{
        flex: 1;
    }
    img {
        width: 35px; 
        padding-right: 10px;
    }
`;

const Dropdown = styled.div`
    // max-width: 414px;
    height: auto;
    box-sizing:border-box;
    background-color: #FFFF;
    display:${props=>props.expanded ? "flex" : "hidden"};
    opacity:${props=>props.expanded ? 1 : 0};
    height:${props=>props.expanded ? "auto" : "0px"};
    flex-direction:column;
    transition:opacity 0.3s;
    cursor:pointer;
    div:hover {
        background-color:#A5BFCA;
    }
`;

const RotateImg = styled.img`
    transform:${props=>props.expanded ? "rotate(-180deg)" : "rotate(0deg)"};
    transition: 1s;
    width: 20px;
    height: auto;
`;
const Option = styled.div`
    // max-width: 414px;
    height: 70px;
    border: 1px solid #D9D9D9;
    align-items:center;
    text-align: left;
    display: flex;
    padding: 0px 30px 0px 75px;
    background-color: ${props=>props.selected ? "#A5BFCA" : "none"};
    h5 {
        flex: 1;
    }
    ${props=>props.reMove === true && css`
        display: none;
    `}
    margin-top: -1px;
`;

const CheckMark = styled.img`
    display:${props=>props.selected ? "inline-flex" : "none"};
    width: 30px;
    height: auto;
`;

const Title = styled.div`
    display:flex;
    align-items:center;
    flex: 1;
    img {
        width: 35px; 
        padding-right: 10px;
    }   
    ${props=>props.changeIcon1 === true && css`
        display: none;
    `}
    ${props=>props.changeIcon2 === true && css`
        display: none;
    `}
`;

const Icon = styled.img``;

const TimeFilter = ({text1, text2, text3, text4, reMove, changeIcon1, changeIcon2}) => {

    const [expanded, setExpanded] = useState(false);
    const[selected, setSelected] = useState();

    return <Container>
        <FilterBox onClick={()=>{setExpanded(!expanded);}}>
            <Title changeIcon1={changeIcon1}>
                <Icon src="/time.svg" alt="Time"/>
                <h5>Time</h5>
            </Title>
            <Title changeIcon2={changeIcon2}>
                <Icon src="/symptom.png" alt="MedCond"/>
                <h5>Medical Conditions</h5>
            </Title>
            <RotateImg expanded={expanded} src="/down-white.svg" />
        </FilterBox>

        <Dropdown expanded={expanded}>
            <Option selected={selected === 1} onClick={() => {
               setSelected(1);
           }}>
               <h5>{text1}</h5>
               <CheckMark selected={selected === 1} src="/select.png" />
            </Option>

            <Option selected={selected === 2} onClick={() => {
               setSelected(2);
           }}>
               <h5>{text2}</h5>
               <CheckMark selected={selected === 2} src="/select.png" />
            </Option>

            <Option selected={selected === 3} onClick={() => {
               setSelected(3);
           }}>
               <h5>{text3}</h5>
               <CheckMark selected={selected === 3} src="/select.png" />
            </Option>

            <Option selected={selected === 4} onClick={() => {
               setSelected(4);
           }}>
               <h5>{text4}</h5>
               <CheckMark selected={selected === 4} src="/select.png" />
            </Option>

            <Option reMove={reMove} selected={selected === 5} onClick={() => {
               setSelected(5);
           }}>
               <h5>Dementia</h5>
               <CheckMark selected={selected === 5} src="/select.png" />
            </Option>

            <Option reMove={reMove} selected={selected === 6} onClick={() => {
               setSelected(6);
           }}>
               <h5>Diabetes</h5>
               <CheckMark selected={selected === 6} src="/select.png" />
            </Option>

            <Option reMove={reMove} selected={selected === 7} onClick={() => {
               setSelected(7);
           }}>
               <h5>Epilepsy</h5>
               <CheckMark selected={selected === 7} src="/select.png" />
            </Option>

            <Option reMove={reMove} selected={selected === 8} onClick={() => {
               setSelected(8);
           }}>
               <h5>High Blood Pressure</h5>
               <CheckMark selected={selected === 8} src="/select.png" />
            </Option>

            <Option reMove={reMove} selected={selected === 9} onClick={() => {
               setSelected(9);
           }}>
               <h5>Hypertension</h5>
               <CheckMark selected={selected === 9} src="/select.png" />
            </Option>

        </Dropdown>
    </Container>
}   

TimeFilter.defaultProps = {
    text1:"All",
    text2:"Next Day",
    text3:"Next 2 Days",
    text4:"Upcoming Week",
    expand: false,
    reMove: true,
    changeIcon1: true,
    changeIcon2: true
}

export default TimeFilter; 