import React from 'react';
import SearchBar from '../common/SearchBar';
import Robot from '../Robot';
import RobotStore from '../../stores/RobotStore';
const axios = require('../../../node_modules/axios/index.d');

export default class Live extends React.Component {
    constructor() {
        super();
        this.getRobots = this.getRobots.bind(this);
        this.searchFilter = this.searchFilter.bind(this);
        Live.strcmp = Live.strcmp.bind(this);
        this.state = {
            robots: [],
            search: 'Search',
            NoSearch: true
        };
    }

    updateSearch(event) {
        // this.setState({NoSearch: false});
        // console.log('Update');
        this.setState({search: event.target.value});
        // console.log(this.state.search);
    }

    componentDidMount() {
        RobotStore.on('change', this.getRobots);
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
                const robs = response.data.map(this.searchFilter);
                this.setState({
                    robots: robs
                });
                // console.log(response.data);
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
                    robots: robs
                });
                console.log(response.data);
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    searchFilter(robot) {
        const hostname = robot.hostname.toString().toLowerCase();
        const ip = robot.ip_address.toString().toLowerCase();

        // const search = this.state.search.toString().toLowerCase();
        // const NoSearch = this.state.no_search;

        // if ((this.strcmp(hostname, search) === 0) || NoSearch) {
        return <Robot hostname={hostname} ip={ip} {...robot}/>;
        // }
    }

    static strcmp(a, b) {
        if (a < b) {
            return -1;
        }
        return a > b ? 1 : 0;
    }

    render() {
        const robots = this.state.robots;
        const search = this.state.search;
        console.log(robots);
        // const strcmp = this.strcmp;
        // Need to map only the robots that match whats in search
        const RobotComponents = robots;

        return (
            <div>
                <div className='row-fluid'>
                    <div className='col-lg-12'>
                        <SearchBar value={search} onChange={this.updateSearch.bind(this)}/>
                        <div className=' text-center'> {
                            RobotComponents
                        }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
