import React from "react";

import Robot from "../components/Robot";
import RobotStore from "../stores/RobotStore";

export default class Live extends React.Component {
    constructor() {
        super();
        this.getRobots = this.getRobots.bind(this);
        this.state = {
          robots: RobotStore.getAll(),
        };
    }

    componentWillMount() {
      RobotStore.on("change",  this.getRobots) ;
    }

    getRobots() {
      this.setState({
        robots: RobotStore.getAll(),
      });
    }


    render() {
        const {
            robots
        } = this.state;

        const RobotComponents = robots.map((robot) => {
            return <Robot key = {
                robot.hostname
            } {...robot
            }
            />;
        });

        return (
          <div>
          <div class = "row-fluid" >
            <div class = "col-lg-12" >
            <div class = " text-center" > {
                RobotComponents
            }
            </div>
            < /div >
            </div>
            </div>
        );
    }
}