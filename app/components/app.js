import React from 'react';

import Dashboard from './layout/Dashboard';

export default class App extends React.Component {
    render() {
        return (
            <Dashboard props={this.props} children={this.props.children}/>
        );
    }
}
