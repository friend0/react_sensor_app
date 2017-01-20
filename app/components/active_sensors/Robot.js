import React from 'react';

export default class Robot extends React.Component {
    render() {
        const data = this.props.data;
        const robot = data.props;
        const img_style = {
            display: 'block',
            margin: 'auto'
        }
        return (
            <div className="bill compact-bill">
                <img className="icon" style={img_style} src={robot.icon}/>
                <div className="info-container">
                    <h4 className="title">{robot.hostname}</h4>
                    <span className="period">Make: {robot.robot_make} </span>
                    <span className="period">Model: {robot.robot_type} </span>
                </div>
                <span className="amount">{robot.ip}</span>
            </div>


        );
    }
}
