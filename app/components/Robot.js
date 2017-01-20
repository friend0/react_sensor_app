import React from 'react';

export default class Robot extends React.Component {
    render() {
        const hostname = this.props.hostname;
        const ip = this.props.ip_address;
        const line = this.props.line;
        const make = this.props.robot_make;
        const type = this.props.robot_type;
        const infoStyle = {
            color: 'white'
        };
        return (
            <div>
                <h4 > {hostname} </h4>
                <p style={infoStyle}> IP: {ip} </p>
                <p style={infoStyle}> Line: {line} </p>
                <p style={infoStyle}> Robot Make: {make} </p>
                <p style={infoStyle}> Robot Type: {type} </p>
                <a className="btn btn-default" href="#"> More Info </a>
            </div>
        );
    }
}
