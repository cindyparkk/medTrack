import React from 'react';
import Options from 'comps/Options';

export default {
  title: 'medTrack/Options',
  component: Options
};

const Template = (args) => <Options {...args} option1="alzheimer's" option2="angina"/>;

export const DefaultOptions = Template.bind({});
Template.args = {
  label: 'Default Options Dropdown'
};