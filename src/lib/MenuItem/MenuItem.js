import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const fontSize = props => {
  switch(props.size){
    case "small":
      return ".8em";
    case "medium":
      return "1em";
    case "large":
      return "1.2em";
    default:
      return "1em";
  }
}

const MenuRow = styled.div`
  padding: .5rem;
`
const MenuItemWrapper = styled.a`
  padding-right: ${props => props.padding}em;
  font-size: ${fontSize};
  color: #d9d9d9;
  :hover{
    color: #4285F4;
  }
`

const MenuItem = (props) => {
  return <MenuRow><MenuItemWrapper {...props}>{props.children}</MenuItemWrapper></MenuRow>;
}

export default MenuItem;