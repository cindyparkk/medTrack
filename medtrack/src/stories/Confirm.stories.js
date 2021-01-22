import React from 'react';
import Confirm from 'comps/Confirm';

export default {
  title: 'medTrack/Confirm Box',
  component: Confirm
};

const Template = (args) => <Confirm {...args} />;

export const DefaultConfirm = Template.bind({});
Template.args = {
  label: 'Default Confirm'
};