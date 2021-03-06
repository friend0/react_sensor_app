import React from 'react';
import {IndexLink, Link} from 'react-router';

export default class Nav extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsed: true
        };
    }

    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }

    render() {
        // const {location} = this.props;
        const {collapsed} = this.state;
        // const featuredClass = location.pathname === '/' ? 'active' : '';
        // const archivesClass = location.pathname.match(/^\/archives/) ? 'active' : '';
        // const settingsClass = location.pathname.match(/^\/settings/) ? 'active' : '';
        // const robotHudClass = location.pathname.match(/^\/robotHUD/) ? 'active' : '';
        const navClass = collapsed ? 'collapse' : '';


        return (
            <div className='navbar navbar-toggleable-md' role='navigation'>
                <button type='button' className='navbar-toggle'
                        onClick={this.toggleCollapse.bind(this)}>
                    <span className='sr-only'>Toggle navigation</span>
                    <span className='icon-bar'></span>
                    <span className='icon-bar'></span>
                    <span className='icon-bar'></span>
                </button>
                <div className='navbar-header'>
                    <a className='navbar-brand'href='#'>
                        Panopticon
                    </a>`
                </div>
                <div className={'navbar-collapse ' + navClass}
                     id='bs-example-navbar-collapse-1'>
                    <ul className='nav navbar-nav'>
                        <li activeClassName='active' onlyActiveOnIndex={true}>
                            <IndexLink to='/' onClick={this.toggleCollapse.bind(this)}>
                                Featured</IndexLink>
                        </li>
                        <li activeClassName='active'>
                            <Link to='/calculator' onClick={this.toggleCollapse.bind(this)}>
                                Rotations and Transformations</Link>
                        </li>
                        <li activeClassName='active'>
                            <Link to='/archives' onClick={this.toggleCollapse.bind(this)}>
                                Archives</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
