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
      className: "",
      disabled: boolean("Disabled (disabled)", false),
      padding: number("Padding"),
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
        <MenuItem size="small" {...regularProps}>Menu Item</MenuItem>
        <MenuItem size="medium" {...regularProps}>Menu Item</MenuItem>
        <MenuItem size="large" {...regularProps}>Menu Item</MenuItem>
      </div>
    )
  });