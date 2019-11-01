import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const width = (props) => {
  switch(props.size){
    case "small":
      return "40%";
    case "medium":
      return "60%";
    case "large":
      return "80%";
    case "huge":
      return "100%";
    default:
      return "40%";
  }
};

const AccordionWrapper = styled.div`
  border: solid #d9d9d9 1px;
  width: ${width};
  padding: .2em;

  
`;

const AccordionContent = styled.div`
  width: ${width};
  overflow: hidden;
  max-height: ${props => (props.isOn ? "300em" : "0")};
  transition: ${props => (props.isOn ? "max-height .3s ease-in" : "max-height .3s")};

  div{
    display: inline-block;
    margin: .5em;
    padding-bottom: .5em;
  }
`;

class Accordion extends React.Component{
  constructor(props){
    super(props);
    this.state = { toggle: false };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick = () => {
    this.setState(state => ({
      toggle: !state.toggle
    }));
  };
  
  render(){
    const props = this.props;
    return(
    <div>
      <AccordionWrapper onClick={this.handleClick}{...props}>{props.title}</AccordionWrapper>
      <AccordionContent {...props} isOn={this.state.toggle}>
        <div>
        {props.children}
        </div>
      </AccordionContent>
    </div>  
    )
  }
}

Accordion.defaultProps = {
  size: "medium",
  title: "Section Title",
}

export default Accordion;