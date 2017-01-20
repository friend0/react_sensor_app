import React from 'react';
import Nav from './Nav';

export default class Dashboard extends React.Component {
    render() {
        const containerStyle = {
            marginTop: '60px'
        };
        return (
            <div className="Layout">
                <Nav location={this.props.location}/>
                <div className="Layout-Header">
                    <h1> Panopticon</h1>
                </div>
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
