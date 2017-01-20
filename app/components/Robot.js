import React from "react";


export default class Robot extends React.Component {
    render() {
        const { hostname } = this.props;

        return (
            <div >
            <h4 > {
                hostname
            } < /h4>
            <p > Lorem ipsum dolor sit amet, consectetur adipisicing elit.Saepe rem nisi accusamus error velit animi non ipsa placeat.Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur. < /p> <
            a class = "btn btn-default"
            href = "#" > More Info < /a>
            </div>

        );
    }
}