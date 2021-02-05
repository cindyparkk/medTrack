import React from 'react';
import TimeFilter from '../comps/Filter';

export default {
  title: 'medTrack/Filter',
  component: TimeFilter,
};

export const BasicTimeFilter = () => <TimeFilter changeIcon1="false"/>; 
export const MedCondFilter = () => <TimeFilter 
text1="Alzheimer’s"
text2="Angina"
reMove="false"
changeIcon2="false"
/>; 


