import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean, number } from '@storybook/addon-knobs';
import MenuItem from '../MenuItem';
import Menu from './Menu';

const props = {
  regular: () => {
    return{
    width: text("Menu Width (width: string)", "15%"),
    borderWidth: number("Border Width (borderWidth: number)", "1px"),
    borderT: text("Top Border Style (borderT: string)", "none"),
    borderR: text("Right Border Style (borderR: string)", "none"),
    borderB: text("Bottom Border Style (borderB: string)", "solid"),
    borderL: text("Left Border Style (borderL: string)", "solid"),
    borderA: text("All Border Style (borderA: string)", "none"),
    borderColor: text("Color (borderColor: string)", "#d9d9d9"),
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
          <MenuItem onClick={action('clicked')}>Item 1</MenuItem>
          <MenuItem onClick={action('clicked')}>Item 2</MenuItem>
          <MenuItem onClick={action('clicked')}>Item 3</MenuItem>
        </Menu>
      </div>
    );
  });