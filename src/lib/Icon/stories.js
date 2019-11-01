import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean, number } from '@storybook/addon-knobs';
import Icon from './Icon';

const shapes = {
  circle: "circle",
  square: "",
};

const sizes = {
  native: "",
  small: "small",
  thumbnail: "thumbnail",
}

const floats = {
  left: "left",
  right: "right",
}

const props = {
  regular: () => {
    return {
      shape: select("Shape", shapes, "circle"),
      size: select("Size", sizes, ""),
      src: text("Source (src)", "https://dummyimage.com/250x250.jpg/612/ffffff"),
      float: select("Align (float)", floats, "left"),
    };
  },
};

storiesOf("Icon", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    const regularProps = props.regular();
    return(
      <div>
        <Icon {...regularProps}></Icon>
      </div>
    )
  });