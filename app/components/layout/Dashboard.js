import React from 'react';
import Nav from './Nav';
import Header from './Header';

export default class Dashboard extends React.Component {
    render() {
        const containerStyle = {
            marginTop: '60px',
            color: 'white'
        };

        console.log(this.props);
        return (
            <div className="Layout">
                <Nav location={this.props.location}/>
                <Header root={this.props.props.route.path}/>

                <div className="container" style={containerStyle}>
                    <div className="row">
                        <div className="col-lg-12">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
