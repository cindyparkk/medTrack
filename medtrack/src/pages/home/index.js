import React, {useState, useEffect} from 'react';
import BannerTime from 'comps/BannerTime';
import FilterBy from 'comps/FilterBy';
import Title from 'comps/Title';
import MedInfoBox from 'comps/MedInfoBox';

function Home() {
    return (
      <div className="bg">
        <BannerTime />
        <FilterBy /> 
        <div className="content">
          <Title />
          <div>
            <MedInfoBox />
            <MedInfoBox />
          </div>   
        </div> 
      </div>
    );
  }
  
  export default Home;