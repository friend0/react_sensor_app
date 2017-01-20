import React, { PropTypes, Component } from 'react';
import ReactDOM from "react-dom";

import AppRoutes from '../AppRoutes'
import { Router, browserHistory } from 'react-router';

window.onload = () => {
  ReactDOM.render(<AppRoutes history={browserHistory}/>, document.getElementById('root'));
};
