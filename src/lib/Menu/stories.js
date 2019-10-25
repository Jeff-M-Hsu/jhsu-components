import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean, number } from '@storybook/addon-knobs';
import MenuItem from '../MenuItem';
import Menu from './Menu';

const props = {
  regular: () => {
    return{
    width: text("Menu Width (width: string)"),
    borderWidth: number("Border Width (borderWidth: number)"),
    borderT: text("Top Border Style (borderT: string)"),
    borderR: text("Right Border Style (borderR: string)"),
    borderB: text("Bottom Border Style (borderB: string)"),
    borderL: text("Left Border Style (borderL: string)"),
    borderA: text("All Border Style (borderA: string)"),
    borderColor: text("Color (borderColor: string)")
    };
  },
};

storiesOf("Menu", module)
  .addDecorator(withKnobs)
  .add("with MenuItems", () => {
    const regularProps = props.regular();
    return(
      <div>
        <Menu {...regularProps}>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
          <MenuItem>Item 3</MenuItem>
        </Menu>
      </div>
    );
  });