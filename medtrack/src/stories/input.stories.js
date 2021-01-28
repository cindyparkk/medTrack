import React from 'react';
import Input from '../comps/Input/time'
import InputAmount from '../comps/Input/doseAmount'
import InputMed from '../comps/Input/medInfo'
import HowOftenInput from '../comps/Input/howoften'
export default {
    title: 'medTrack/Input', 
    component: Input
}; 

export const TimeInput = () => <Input />; 
export const DoseInput = () => <InputAmount />; 
export const MedInput = () => <InputMed />; 
export const OftenInput= () => <HowOftenInput />;
