import React from 'react';
import Backdrop from 'comps/Backdrop';

export default {
  title: 'medTrack/Back drop',
  component: Backdrop
};

const BackDrop = (args) => <Backdrop {...args} />;

export const DefaultBackdrop = BackDrop.bind({});
BackDrop.args = {
  label: 'Default Backdrop'
};