import React, { Component } from 'react';
import { StyledContainer, StyledSide, StyledMain } from './style';

// components
import SideNav from '../SideNav/SideNav';
import Home from '../Home/Home';
import SideNavPage from '../SideNavPage';

class Dashboard extends Component {
  render() {
    return (
      <StyledContainer container spacing={0}>
        <StyledSide item md={3}>
          <SideNav />
        </StyledSide>
        <StyledMain item xs={12} md={9}>
          <Home />
        </StyledMain>
      </StyledContainer>
    );
  }
}

export default Dashboard;
