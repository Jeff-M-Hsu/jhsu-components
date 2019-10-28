import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Shape = (props) => {
  switch(props.shape){
    case "circle":
      return "50%";
    default:
      return "0";
  }
}

const Size = (props) => {
  switch(props.size){
    case "thumbnail":
      return "5em";
    case "small":
      return "10em";
    default:
      return "auto";
  }
}

const IconWrapper = styled.img`
  border-radius: ${Shape};
  padding: .5rem;
  width: ${Size};
`

const Icon = (props) => {
  return(
    <IconWrapper {...props}>{props.children}</IconWrapper>
  );
}

Icon.defaultProps = {
  src: "https://dummyimage.com/250x250.jpg/612/ffffff",
  shape: "circle",
}

export default Icon;