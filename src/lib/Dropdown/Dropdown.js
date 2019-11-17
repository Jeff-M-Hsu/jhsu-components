import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DropdownWindow = styled.div`
display: block;
  min-width: 150px;
  float: right;
  margin-right: 2em;
`

const Divider = styled.div`
  margin-left: 60%;
`
const DropdownIcon = styled.img`
  display: block;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: 0 auto;
`
const DropdownArrow = styled.span`
  margin-top: 5px;
  margin-bottom: -5px;
  margin-left: auto;
  margin-right: auto;
  display: ${props => (props.isOn ? "block" : "hidden")};
  transform: rotate(45deg);
  height: ${props => (props.isOn ? "10px" : "0")};
  width: ${props => (props.isOn ? "10px" : "0")};
  background-color: white;
`

const DropdownContent = styled.div`
  border-radius: 5px;
  display: ${props => (props.isOn ? "block" : "none")};
  padding: .5em;
  background-color: white;
  box-shadow: 0 2px 12px rgba(0,0,0,0.175); 
`

class Dropdown extends React.Component{
  constructor(props){
    super(props);
    this.state = { toggle: false }
    this.handleClick = this.handleClick.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }
  
  handleClick = () => {
    this.setState(state => ({
      toggle: !state.toggle
    }));
  }
  
  handleHide = (e) => {
    if(e && e.relatedTarget){
      e.relatedTarget.click();
      console.log("target clicked")
    }
    this.setState({toggle: false});
  }
  
  render(){
    const props = this.props;
    return(
      <DropdownWindow>
        <Divider>
          <DropdownIcon src={props.src} onClick={this.handleClick} onBlur={this.handleHide} tabIndex={0} />
          <DropdownArrow isOn={this.state.toggle}></DropdownArrow>
        </Divider>
        <DropdownContent isOn={this.state.toggle}>{props.children}</DropdownContent>
      </DropdownWindow>
      )
  }
}


export default Dropdown;