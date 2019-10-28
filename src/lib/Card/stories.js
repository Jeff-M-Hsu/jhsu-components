import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean, number } from '@storybook/addon-knobs';
import Card from './Card';
import Icon from '../Icon';
import Header from '../Header';

const sizes = {
  small: "small",
  medium: "medium",
  large: "large",
};

const borders = {
  default: "",
  none: "none",
};

const props = {
  regular: () => {
    return {
      border: select("Border", borders, ""),
    };
  },
};

storiesOf("Card", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    const regularProps = props.regular();
    return(
      <div>
        <Card size="small" {...regularProps}><Icon shape="circle" size="thumbnail" /><p><Header>John Smith</Header><br/>Email: John@Smith.com<br/>Phone: 999-999-9999</p></Card>
        <Card size="medium" {...regularProps}><Icon shape="circle" size="small" src="https://dummyimage.com/250/888/fff" /><p><Header>John Smith</Header><br/>Email: John@Smith.com<br/>Phone: 999-999-9999</p></Card>
        <Card size="large" {...regularProps}><Icon shape="circle" src="https://dummyimage.com/250/00f/fff" /><p><Header>John Smith</Header><br/>Email: John@Smith.com<br/>Phone: 999-999-9999</p></Card>
      </div>
    )
  });