import React, {useState, useEffect} from 'react';
import BannerBack from 'comps/BannerBack';
import Filter from 'comps/Filter';

function FilterPage() {
    return (
      <div className="">
        <BannerBack text="Filter by"/>
        <Filter changeIcon1="false"/>; 
        <Filter 
            text1="Alzheimer’s"
            text2="Angina"
            text3="Arthritis"
            text4="Asthma"
            reMove="false"
            changeIcon2="false"
        />; 
      </div>
    );
  }
  
  export default FilterPage;