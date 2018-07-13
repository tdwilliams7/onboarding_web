import React, { Component } from 'react';
import {
  StyledBody,
  StyledTitle,
  StyledButton,
  StyledLinkGroup,
  StyledLink,
  StyledIconList
} from './style';

class SideNav extends Component {
  state = {};

  render() {
    return (
      <StyledBody>
        <StyledTitle>Onboard</StyledTitle>
        <StyledButton>+ New Employee</StyledButton>
        <StyledLinkGroup>
          <StyledLink to="#">Home</StyledLink>
        </StyledLinkGroup>
        <StyledLinkGroup>
          <StyledLink to="#">Employees</StyledLink>
        </StyledLinkGroup>
        <StyledLinkGroup>
          <StyledLink to="#">Open Tasks</StyledLink>
        </StyledLinkGroup>
        <StyledLinkGroup>
          <StyledLink to="#">Lists</StyledLink>
        </StyledLinkGroup>
        <StyledLinkGroup>
          <StyledLink to="#">New Task</StyledLink>
        </StyledLinkGroup>
        <StyledLinkGroup>
          <StyledLink to="#">Signout</StyledLink>
        </StyledLinkGroup>
        <StyledIconList>
          <div>Social media icons</div>
        </StyledIconList>
      </StyledBody>
    );
  }
}

export default SideNav;
