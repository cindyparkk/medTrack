import React from 'react';
import MedInfoBox from '../comps/MedInfoBox';
import MarkMeds from '../comps/MarkMeds'; 

export default {
  title: 'medTrack/MedInfoBox',
  component: MedInfoBox,
};

export const HomeInfoBox = () => <MedInfoBox />; 
export const MarkMedsBox = () => <MarkMeds />; 

