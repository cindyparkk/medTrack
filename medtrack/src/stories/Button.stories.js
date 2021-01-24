import React from 'react';
import ButtonBig from '../comps/ButtonBig';
import Button from '../comps/Button';

export default {
    title: 'medTrack/BigButton', 
    component: ButtonBig
}; 

export const ApplyButton = () => <ButtonBig />; 
export const RegButton = () => <Button />;
export const ColorButton = () => <Button text="Back to Medications" bgcolor ={"#63AAC8"}/>;


