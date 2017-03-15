// @flow

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import MyAlarms from './containers/MyAlarms';
import GlobalAddAlarm from './containers/GlobalAddAlarm';
import About from './components/About';
import './App.css';

class App extends Component {
  state = {
    adding: false,
  };

  toggleAddingMode = () => {
    this.setState(state => ({
      adding: !state.adding,
    }));
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Alarms</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={MyAlarms} />
          <Route path="/about" component={About} />

          <GlobalAddAlarm onClick={this.toggleAddingMode} />
        </div>
      </Router>
    );
  }
}

export default App;
