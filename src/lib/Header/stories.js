import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean, number } from '@storybook/addon-knobs';
import Header from './Header';

const props = {
  regular: () => {
    return {
      size: text("Font Size", "1.2em"),
    };
  },
};

storiesOf("Header", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    const regularProps = props.regular();
    return(
      <Header {...regularProps}>Just a Header</Header>
    )
  });