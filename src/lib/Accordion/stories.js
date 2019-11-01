import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean, number } from '@storybook/addon-knobs';
import Accordion from './Accordion';
import Icon from '../Icon';
import Button from '../Button';
import Menu from '../Menu';
import MenuItem from '../MenuItem';
import Header from '../Header';
import Card from '../Card';

const sizes = {
  small: "small",
  medium: "medium",
  large: "large",
};

const props = {
  regular: () => {
    return{
      size: select("Width", sizes, "medium"),
      title: text("Title", "Section Title"),
    };
  }
};

storiesOf("Accordion", module)
  .addDecorator(withKnobs)
  .add("with content", () => {
      const regularProps = props.regular();
      return(
        <div>
          <Accordion {...regularProps}>
            <Icon shape="square" float="right"/>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."<br/><br/>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."<br/><br/>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."<br/><br/>
            <Icon size="small" shape="square" float="left"/>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."<br/><br/>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."<br/><br/>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </Accordion>
          <Accordion {...regularProps}>
            <Button theme="primary" size="medium">Hello</Button>
            <Card size="large"><Icon shape="circle" size="small" src="https://dummyimage.com/250/888/fff" /><p><Header>John Smith</Header><br/>Email: John@Smith.com<br/>Phone: 999-999-9999</p></Card>
            <Menu>
              <MenuItem size="medium">Menu Item</MenuItem>
              <MenuItem size="medium">Menu Item</MenuItem>
              <MenuItem size="medium">Menu Item</MenuItem>
            </Menu>
          </Accordion>
        </div>
      );
  });