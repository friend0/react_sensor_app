import React from 'react';
import {IndexLink} from 'react-router';

export default class Header extends React.Component {
    render() {
        const linkStyle = {
            textDecoration: 'none'
        };
        return (
            <header className="Layout-header">
                <h1 className="title">
                    <IndexLink style={linkStyle} to={this.props.root}>Panopticon</IndexLink>
                </h1>
            </header>
        );
    }
}
