import React, { Component } from 'react';
import logo from './logo.svg';
import './Layout.css';

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <div className="Layout-header">
          <img src={logo} className="Layout-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="Layout-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Layout;