import React from 'react';
import MedInfoBox from '../comps/MedInfoBox';
import MarkMeds from '../comps/MarkMeds'; 
import Reminder from '../comps/Reminder';

export default {
  title: 'medTrack/MedInfo',
  component: MedInfoBox,
};

export const HomeInfoBox = () => <MedInfoBox />; 
export const MarkMedsBox = () => <MarkMeds />; 
export const ReminderBox = () => <Reminder />;
