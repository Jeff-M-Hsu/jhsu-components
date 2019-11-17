import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeaderStyle = styled.span`
  font-weight: bold;
  font-size: ${props => props.size};
  color: ${props => props.color};
`

const Header = (props) => {
  return(
    <HeaderStyle {...props}>{props.children}</HeaderStyle>
  )
}

export default Header;