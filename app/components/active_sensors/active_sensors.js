import React from 'react';
import SearchBar from '../common/SearchBar';
import Robot from './Robot';
import List from '../common/List';

const axios = require('../../../node_modules/axios');

export default class Live extends React.Component {
    constructor() {
        super();
        this.getRobots = this.getRobots.bind(this);
        this.searchFilter = this.searchFilter.bind(this);
        this.initRobots = this.initRobots.bind(this);

        Live.strcmp = Live.strcmp.bind(this);
        this.state = {
            robots: [],
            filteredRobots: [],
            search: 'Search',
            NoSearch: true
        };
    }

    updateSearch(event) {
        this.setState({NoSearch: false});
        // console.log('Update');
        this.setState({search: event.target.value});
        this.searchFilter(event);

        // console.log(this.state.search);
    }

    initRobots(robot) {
        const hostname = robot.hostname;
        const ip = robot.ip_address;
        return (<Robot hostname={hostname} ip={ip} {...robot}/>);
    }
    componentDidMount() {
        axios.get('/api/get-robots',
            {
                proxy: {
                    host: 'localhost',
                    port: 6001
                },
                headers: {
                    Accept: 'application/json'
                },
                responseType: 'json'

            })
            .then(response => {
                const robs = response.data.map(this.initRobots);
                this.setState({
                    robots: robs,
                    filteredRobots: robs
                });
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    getRobots() {
        axios.get('/api/get-robots',
            {
                proxy: {
                    host: 'localhost',
                    port: 6001
                },
                headers: {
                    Accept: 'application/json'
                },
                responseType: 'json'
            })
            .then(function(response) {
                const robs = response.data.map(this.searchFilter);
                this.setState({
                    robots: robs,
                    filteredRobots: robs
                });
                console.log(response.data);
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    searchFilter() {

        const search = this.state.search;

        const regex = new RegExp(search, 'i');
        const NoSearch = this.state.NoSearch;
        const filtered = this.state.robots.filter(function(datum) {
            let robot = datum.props;
            console.log(robot);
            return ((robot.hostname.search(regex) > -1) || NoSearch);
        });
        console.log("Filtered Robots");
        console.log(filtered);
        this.setState({
            filteredRobots: filtered
        });

    }

    static strcmp(a, b) {
        if (a < b) {
            return -1;
        }
        return a > b ? 1 : 0;
    }

    render() {
        const containerStyle = {
            marginTop: '60px'
        };
        const headerStyle = {
            color: '#C7C9CA'

        };

        // const strcmp = this.strcmp;
        // Need to map only the robots that match whats in search

        return (
            <section className="latest-bills">
                <header className="section-header">
                    <h3 className="title" style={headerStyle}>Active Sensors</h3>
                </header>
                <div className="container" style={containerStyle}>
                    <SearchBar value={this.state.search} onChange={this.updateSearch.bind(this)}/>
                </div>
                <section className="section-content">
                    <List items={this.state.filteredRobots} itemType={Robot}/>
                </section>
            </section>
        );
    }
}
