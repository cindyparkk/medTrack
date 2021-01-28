import React, {useState, useEffect} from 'react'; 
import styled, {css} from "styled-components";

const FilterBox = styled.div`
    max-width: 414px;
    height: 80px;
    box-sizing:border-box;
    display:flex;
    cursor:pointer;
    background-color: #094D69;
    color:white;
    padding: 0px 20px 0px;
    align-items: center;
    h5{
        flex: 1;
    }
    img {
        width: 35px; 
        transform:rotate(-90deg);
    }
`;

const FilterBy = ({}) => {

    return <div>
        <FilterBox>
            <h5>Filter By</h5>
            <img src="/down-white.svg" alt="arrow" />
        </FilterBox>

    </div>
}   

FilterBy.defaultProps = {

}

export default FilterBy; 