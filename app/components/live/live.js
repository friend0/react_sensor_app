import React from 'react';
import SearchBar from '../common/SearchBar';
import Robot from '../Robot';
import RobotStore from '../../stores/RobotStore';

export default class Live extends React.Component {
    constructor() {
        super();
        this.getRobots = this.getRobots.bind(this);
        this.searchFilter = this.searchFilter.bind(this);
        this.strcmp = this.strcmp.bind(this);
        this.state = {
            robots: RobotStore.getAll(),
            search: 'Search',
            NoSearch: true
        };
    }

    updateSearch(event) {
        this.setState({NoSearch: false});
        console.log('Update');
        this.setState({search: event.target.value});
        console.log(this.state.search);
    }

    componentWillMount() {
        RobotStore.on('change', this.getRobots);
    }

    getRobots() {
        this.setState({
            robots: RobotStore.getAll()
        });
    }

    searchFilter(robot) {
        console.log(robot, this.state);
        const hostname = robot.hostname.toString().toLowerCase();
        const search = this.state.search.toString().toLowerCase();
        const NoSearch = this.state.no_search;

        console.log(search, hostname, this.strcmp(hostname, search));
        if ((this.strcmp(hostname, search) === 0) || NoSearch) {
            return <Robot key={hostname} {...robot}/>;
        }
    }

    strcmp(a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
    }

    render() {
        const robots = this.state.robots;
        const search = this.state.search;
        // const strcmp = this.strcmp;
        // Need to map only the robots that match whats in search
        const RobotComponents = robots.map(this.searchFilter);

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
