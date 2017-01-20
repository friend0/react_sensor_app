import {
    EventEmitter
} from "events";

import dispatcher from "../dispatcher";

class RobotStore extends EventEmitter {
    constructor() {
        super();
        this.robots = [{
            hostname: "BIW1-BPL010RB1",
            opc: true,
            opc_active: false
        }, {
            hostname: "BIW1-DSH010RB1",
            opc: true,
            opc_active: false
        }, ];
    }

    createRobot(text) {
        const id = Date.now();

        this.robots.push({
            hostname: {
                text
            },
            opc: true,
            opc_active: false,
        });

        var self = this;
        setTimeout(function() { // Run after dispatcher has finished
            self.emit("change");
        }, 0);
    }

    getAll() {
        return this.robots;
    }

    handleActions(action) {
        console.log("RobotStore received an action", action);
        switch (action.type) {
            case "CREATE_ROBOT":
                {
                    this.createRobot(action.text)
                    break;
                }
            case "RECEIVE_ROBOTS":
                {
                    this.robots = action.robots;
                    var self = this;
                    setTimeout(function() { // Run after dispatcher has finished
                        self.emit("change");
                    }, 0);
                    break;
                }
        }
    }
}

const robotStore = new RobotStore;
dispatcher.register(robotStore.handleActions.bind(robotStore));
export default robotStore;