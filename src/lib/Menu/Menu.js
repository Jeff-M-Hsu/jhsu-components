import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MenuWrapper = styled.div`
  padding: .5em;
  width: ${props => props.width};
  border-top-style: ${props => props.borderT};
  border-right-style: ${props => props.borderR};
  border-bottom-style: ${props => props.borderB};
  border-left-style: ${props => props.borderL};
  border-style: ${props => props.borderA};
  border-width: ${props => props.borderWidth}px;
  border-color: ${props => props.borderColor};
  
`

const Menu = (props) => {
  return <MenuWrapper {...props}>{props.children}</MenuWrapper>
}

Menu.defaultProps = {
  width: "15%",
  borderT: "solid",
  borderR: "none",
  borderB: "solid",
  borderL: "none",
  borderWidth: "1",
  borderColor: "#d9d9d9"
};

export default Menu;