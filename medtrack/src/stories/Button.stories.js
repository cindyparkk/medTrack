/*import React from 'react';
import ButtonBig from 'comps/ButtonBig';
import Button from 'comps/Button';

export default {
  title: 'medTrack/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
}; */

import React from 'react';
import ButtonBig from '../comps/ButtonBig';
import Button from '../comps/Button';

export default {
    title: 'medTrack/BigButton', 
    component: ButtonBig
}; 

export const ApplyButton = () => <ButtonBig />; 
export const RegButton = () => <Button />;
export const ColorButton = () => <Button text="Back to Medications" bgcolor ={"blue"}/>;


