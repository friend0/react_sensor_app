// src/routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Layout from './components/Layout';
import Live from './pages/Live';

const routes = (
    <Route path="/" component={Layout}>
    <IndexRoute component={Live}></IndexRoute>
    </Route>
);

export default routes;