import React from 'react';
import MedAppearance from 'comps/MedAppearance';

export default {
  title: 'medTrack/Med Appearance',
  component: MedAppearance
};

const Template = (args) => <MedAppearance {...args} />;

export const DefaultAppearanceBox = Template.bind({});
Template.args = {
  label: 'Default Appearance Box'
};