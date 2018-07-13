import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

// components
import Signup from '../Signup/Signup';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Switch>
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Signup} />
        </Switch>
      </div>
    );
  }
}

export default App;
