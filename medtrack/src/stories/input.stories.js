import React from 'react';
import Input from '../comps/Input/time'
import InputAmount from '../comps/Input/doseAmount'

export default {
    title: 'medTrack/Input', 
    component: Input
}; 

export const TimeInput = () => <Input />; 
export const DoseInput = () => <InputAmount />; 
