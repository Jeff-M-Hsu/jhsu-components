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
  display: block;
  padding: .5rem;
`
const MenuItemWrapper = styled.a`
  display: block;
  font-size: ${fontSize};
  color: #c9c9c9;
  :hover{
    color: #4285F4;
  }
`

const MenuItem = (props) => {
  return <MenuRow><MenuItemWrapper {...props}>{props.children}</MenuItemWrapper></MenuRow>;
}

MenuItem.defaultProps = {
  size: "medium",
}

MenuItem.propTypes = {
  size: PropTypes.string,
}

export default MenuItem;