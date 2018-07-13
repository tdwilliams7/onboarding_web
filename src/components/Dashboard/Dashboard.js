import React, { Component } from 'react';

// components
import SideNav from '../SideNav/SideNav';

class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <SideNav />
          </div>
          <div className="col-md-9">main switch</div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
