import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean, number } from '@storybook/addon-knobs';
import Dropdown from './Dropdown';
import MenuItem from '../MenuItem';
import Header from '../Header';

const topBar = {
  height: "4em",
  padding: "1em",
  backgroundColor: "black",
};

storiesOf("Dropdown", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    return (
    <div style={topBar}>
      <Header color="white" size="2.5em">Dropdown</Header>
      <Dropdown src="https://dummyimage.com/250x250.jpg/fff">
        <div>
          <MenuItem>Help</MenuItem>
          <MenuItem>Account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </div>
      </Dropdown>
      </div>
    )
  });