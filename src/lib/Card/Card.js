import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const cardSize = (props) => {
  switch(props.size){
    case "small":
      return "30%";
    case "medium":
      return "40%";
    case "large":
      return "50%";
    default:
      return "30%";
  }
}

const borderStyle = (props) => {
  switch(props.border){
    case "none":
      return "none";
    default:
      return "solid #d9d9d9 1px";
  }
}    

const CardContainer = styled.div`
  padding: .5rem;
  display: flex;
`

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  border: ${borderStyle};
  padding-right: 1rem;
`

const Card = (props) => {
  return <CardContainer><CardWrapper {...props}>{props.children}</CardWrapper></CardContainer>;
}

Card.defaultProps = {
  size: "small",
  border: "",
}

Card.propTypes = {
  size: PropTypes.string,
}

export default Card;