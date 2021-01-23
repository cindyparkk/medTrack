import React from 'react';
import ButtonBig from '../comps/ButtonBig';
import Button from '../comps/Button';
import BannerTime from 'comps/BannerTime';
import BannerCancel from 'comps/BannerCancel';
import BannerBack from 'comps/BannerBack';
import MedSpecBanner from 'comps/MedSpecBanner';

export default {
    title: 'medTrack/Time', 
    component: BannerTime
}; 

export const Time = () => <BannerTime />; 

export const Cancel = () => <BannerCancel />; 

export const Back = () => <BannerBack />; 

export const MedInfoBanner = () => <MedSpecBanner />; 


