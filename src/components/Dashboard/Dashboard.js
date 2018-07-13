import React, { Component } from 'react';
import { StyledContainer, StyledSide, StyledMain } from './style';

// components
import SideNav from '../SideNav/SideNav';
import Home from '../Home/Home';
import SideNavPage from '../SideNavPage';

class Dashboard extends Component {
  render() {
    return (
      <StyledContainer className="container-fluid">
        <div className="row">
          <StyledSide className="col-md-3">
            <SideNavPage />
          </StyledSide>
          <StyledMain className="col-md-9">
            <Home />
          </StyledMain>
        </div>
      </StyledContainer>
    );
  }
}

export default Dashboard;
