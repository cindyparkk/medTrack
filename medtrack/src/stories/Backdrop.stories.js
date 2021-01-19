import React from 'react';
import Backdrop from 'comps/Backdrop';

export default {
  title: 'medTrack/BackDrop',
  component: Backdrop
};

const Template = (args) => <Backdrop {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'Default Backdrop',
};
