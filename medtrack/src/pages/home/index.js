import React, {useState, useEffect} from 'react';
import BannerTime from 'comps/BannerTime';
import FilterBy from 'comps/FilterBy';
import Title from 'comps/Title';
import MedInfoBox from 'comps/MedInfoBox';
import Button from 'comps/Button';

function Home() {
    return (
      <div className="page">
        <BannerTime />
        <FilterBy /> 
        <div className="content">
          <Title />
          <MedInfoBox />
          <MedInfoBox />
        </div> 
        <div>
          <Button text="+ Add Med"/>
          <Button text="See All Meds" bgcolor={"#63AAC8"}/>
        </div>
      </div>
    );
  }
  
  export default Home;




