import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 1.5rem;
`;

const Input = styled.input`
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  padding: 0;
  visibility: hidden;
  overflow: visible;
  margin: 0;
`;
const Span = styled.span`
  &:before {
    transform: ${props =>
      !props.checked ? 'translateX(1.625rem)' : 'translateX(0rem)'};
    background: #5e72e4;
    position: absolute;
    bottom: 2px;
    left: 2px;
    width: 18px;
    height: 18px;
    content: '';
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    border-radius: 50% !important;
    // background-color: #ddd; // if non active
  }

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  cursor: pointer;
  // border: 1px solid #cad1d7; // if non active
  border-radius: 34px !important;
  background-color: transparent;
  border: 1px solid #5e72e4; // if active
`;

class ToggleButton extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: false
    };
  }

  handleCheckBoxChange = e => {
    this.setState({checked: e.target.checked});
  };

  render() {
    return (
      <Label>
        <Input
          type={'checkbox'}
          onChange={e => {
            this.handleCheckBoxChange(e);
          }}
        />
        <Span checked={this.state.checked} />
      </Label>
    );
  }
}

export default ToggleButton;
