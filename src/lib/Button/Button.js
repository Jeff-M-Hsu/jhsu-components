import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const background = props => {
  switch(props.theme){
    case "primary":
      return "#4285F4";
    case "danger":
      return "#DB4437";
    case "secondary":
    case "ghost":
      return "transparent";
    default:
      return "#4285F4";
  }
}

const border = props => {
  switch(props.theme){
    case "secondary":
      return "1px solid black";
    default:
      return "none";
  }
}

const textColor = props => {
  switch(props.theme){
    case "primary":
    case "danger":
      return "white";
    default:
      return "black";
  }
}
  
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
  
const ButtonWrapper = styled.button`
  border-radius: 3px;
  padding: .25em 1em;
  margin: .5em 1em;
  font-size: ${fontSize};
  background: ${background};
  border: ${border};
  color: ${textColor};
  opacity: ${props => props.disabled ? ".5" : "1"};
`

const Button = (props) => {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
}

Button.defaultProps = {
  theme: "primary",
  border: "primary",
  size: "medium",
}

Button.propTypes = {
  theme: PropTypes.string,
  border: PropTypes.string,
  size: PropTypes.string,
}
export default Button;