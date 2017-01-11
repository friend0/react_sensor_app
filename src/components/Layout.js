import React, { Component } from 'react';
import Footer from "./layout/Footer";
import Nav from "./layout/Nav";
import logo from './layout/logo.svg';
import  './Layout.css';

export default class Layout extends Component {
  navigate() {
    this.props.history.replaceState(null, "/");
  }
  render() {
    const { history } = this.props;
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    return (
      <div className="Layout">
        <Nav location={location} />
        <div className="Layout-Header">
          <img src={logo} className="Layout-logo" alt="logo" />
          <h2 color="#61DAFB"> Panopticon</h2>
        </div>
          <div className="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}