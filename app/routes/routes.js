import React from 'react';
import {IndexRoute, Route} from 'react-router';

import App from './components/app';
import NoMatch from './components/common/NoMatch';

import LatestBills from './components/bill/LatestBills';
import Live from './components/live/live';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={LatestBills}> </IndexRoute>
        <Route path="/live" component={Live}/>
        <Route path="*" component={NoMatch}/>
    </Route>
);

