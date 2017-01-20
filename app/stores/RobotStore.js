import {
    EventEmitter
} from 'events';

class RobotStore extends EventEmitter {
    constructor() {
        super();
        this.robots = [
            {
                hostname: 'BIW1-BPL010RB1',
                opc: true,
                OpcActive: false
            }, {
                hostname: 'BIW1-DSH010RB1',
                opc: true,
                OpcActive: false
            }
        ];
    }

    getAll() {
        return this.robots;
    }

}

const robotStore = new RobotStore();
export default robotStore;
