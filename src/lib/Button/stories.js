import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean, number } from '@storybook/addon-knobs';
import Button from './Button';

const themes = {
  "Primary button (primary)": "primary",
  "Secondary button (secondary)": "secondary",
  "Danger button (danger)": "danger",
  "Ghost button (ghost)": "ghost",
};
const sizes = {
  Small: "small",
  Medium: "medium",
  Large: "large",
};

const props = {
  regular: () => {
    return {
      className: "",
      theme: select("Button theme (theme)", themes, "primary"),
      disabled: boolean("Disabled (disabled)", false),
      size: select("Button size (size)", sizes, "medium"),
      onClick: action("onClick"),
      onFocus: action("onFocus"),
    };
  },
};
      
storiesOf("Buttons", module)
  .addDecorator(withKnobs)
  .add('with text', () => {
    const regularProps = props.regular();
    return(
      <Button {...regularProps} onClick={action('clicked')}>Hello Button</Button>
    );
  });