import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import Icon from './icons/Icon.js';

const MyLink = styled(NavLink)`
  transition: 0.25s all;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 1rem;
  color: #5e72e4;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  margin: 0 10px;
  border-radius: 50%;
  cursor: pointer;

  &.${props => props.activeClassName} {
    background-color: #5e72e4;
    color: #fff;
  }
`;

MyLink.defaultProps = {
  activeClassName: 'active'
};
const IconContainer = styled.div`
  width: ${props => props.width + 'px'};
  height: ${props => props.height + 'px'};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavPill = props => {
  return (
    <MyLink key={props.key} to={`${props.base}/${props.path}`}>
      <IconContainer {...props}>
        <Icon
          icon={props.icon}
          material={props.material}
          width={props.width}
          height={props.height}
        />
      </IconContainer>
    </MyLink>
  );
};

export default NavPill;
