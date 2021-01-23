import React, {useState, useEffect} from 'react'; 
import styled, {css} from "styled-components";
import Arrow from '../../public/down-white.svg';
import TimeIcon from '../../public/time.svg';
import Check from '../../public/select.png';

const FilterBox = styled.div`
    max-width: 414px;
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
    max-width: 414px;
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
    max-width: 414px;
    height: 70px;
    border: 1px solid #D9D9D9;
    align-items:center;
    display: flex;
    padding: 0px 30px 0px 75px;
    background-color: ${props=>props.selected ? "#A5BFCA" : "none"};
    h5 {
        flex: 1;
    }
`;
const CheckMark = styled.img`
    display:${props=>props.selected ? "inline-block" : "none"};
    width: 30px;
    height: auto;
`;

const TimeFilter = ({filterName, text1, text2, text3, text4}) => {

    const [expanded, setExpanded] = useState(false);
    const[selected, setSelected] = useState();

    return <div>
        <FilterBox onClick={()=>{setExpanded(!expanded);}}>
            <img src={TimeIcon} />
            <h5>{filterName}</h5>
            <RotateImg expanded={expanded} src={Arrow} />
        </FilterBox>

        <Dropdown expanded={expanded}>
            <Option selected={selected === 1} onClick={() => {
               setSelected(1);
           }}>
               <h5>{text1}</h5>
               <CheckMark selected={selected === 1} src={Check} />
            </Option>
            <Option selected={selected === 2} onClick={() => {
               setSelected(2);
           }}>
               <h5>{text2}</h5>
               <CheckMark selected={selected === 2} src={Check} />
            </Option>
            <Option selected={selected === 3} onClick={() => {
               setSelected(3);
           }}>
               <h5>{text3}</h5>
               <CheckMark selected={selected === 3} src={Check} />
            </Option>
            <Option selected={selected === 4} onClick={() => {
               setSelected(4);
           }}>
               <h5>{text4}</h5>
               <CheckMark selected={selected === 4} src={Check} />
            </Option>
        </Dropdown>
    </div>
}   

TimeFilter.defaultProps = {
    filterName:"Time",
    text1:"All",
    text2:"Next Day",
    text3:"Next 2 Days",
    text4:"Upcoming Week",
    expand: false,
}

export default TimeFilter; 