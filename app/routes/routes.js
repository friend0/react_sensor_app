import React from 'react';
import {IndexRoute, Route} from 'react-router';

import App from '../components/app';
import NoMatch from '../components/common/NoMatch';

import Live from '../components/active_sensors/active_sensors';
import Calculator from '../components/transformation_calculator/calculator';
import Archive from '../components/archive/archive';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={Live}> </IndexRoute>
        <Route path="/calculator" component={Calculator}/>
        <Route path="/archives" component={Archive}/>
        <Route path="*" component={NoMatch}/>
    </Route>
);

