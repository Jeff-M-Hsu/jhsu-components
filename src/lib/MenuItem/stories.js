import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean, number } from '@storybook/addon-knobs';
import MenuItem from './MenuItem';

const sizes = {
  Small: "small",
  Medium: "medium",
  Large: "large",
};

const props = {
  regular: () => {
    return {
      size: select("Sizes", sizes, "medium"),
      onClick: action("onClick"),
      onFocus: action("onFocus"),
    };
  },
};

storiesOf("MenuItem", module)
  .addDecorator(withKnobs)
  .add("with text", () => {
    const regularProps = props.regular();
    return(
      <div>
        <MenuItem {...regularProps}>Menu Item</MenuItem>
        <MenuItem {...regularProps}>Menu Item</MenuItem>
        <MenuItem {...regularProps}>Menu Item</MenuItem>
      </div>
    )
  });