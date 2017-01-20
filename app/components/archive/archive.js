import React from 'react';
import {OrderedSet} from 'immutable';
import {NotificationStack} from 'react-notification';


export default class Archive extends React.Component {
    constructor(props) {
        super(props);
        this.removeNotification = this.removeNotification.bind(this);
        this.state = {
            notifications: OrderedSet(),
            // This is just used for the sake of an example to make sure
            // notifications have unique keys. In production, you should have
            // a different system for UIDs.
            count: 0
        };
    }

    addNotification() {
        const {notifications, count} = this.state;
        const newCount = count + 1;
        return this.setState({
            count: newCount,
            notifications: notifications.add({
                message: `Submitting Job to Backup Queue...`,
                key: newCount,
                action: 'Dismiss',
                dismissAfter: 3400,
                onClick: () => this.removeNotification(newCount)
            })
        });
    }

    removeNotification(count) {
        const {notifications} = this.state;
        this.setState({
            notifications: notifications.filter(n => n.key !== count)
        });
    }

    render() {
        return (
            <div>
                <form className="form-horizontal">
                    <fieldset>

                        <legend>Backup Request</legend>


                        <div className="form-group">
                            <label className="col-md-4 control-label"
                                   for="selectbasic">Select Body Line</label>
                            <div className="col-md-4">
                                <select id="selectbasic" name="selectbasic"
                                        className="form-control">
                                    <option value="1">BIW1</option>
                                    <option value="2">BIW2</option>
                                    <option value="2">BIW3</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-4 control-label"
                                   for="selectbasic">Select Make</label>
                            <div className="col-md-4">
                                <select id="selectbasic" name="selectbasic"
                                        className="form-control">
                                    <option value="1">Kuka</option>
                                    <option value="2">Fanuc</option>
                                    <option value="2">All</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-4 control-label"
                                   for="textinput">List of Robots</label>
                            <div className="col-md-4">
                                <input id="textinput" name="textinput"
                                       type="text" placeholder="Optional List of Robots to Backup"
                                       className="form-control input-md">
                                </input>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-4 control-label"
                                   for="singlebutton">Single Button</label>
                            <div className="col-md-4">
                                <button id="button1id" name="button1id"
                                        className="btn btn-success"
                                        onClick={this.addNotification.bind(this)}>
                                    Execute Backup
                                </button>
                            </div>
                        </div>
                    </fieldset>
                </form>

                <NotificationStack
                    notifications={this.state.notifications.toArray()}
                    onDismiss={notification => this.setState({
                        notifications: this.state.notifications.delete(notification)
                    })}
                />

            </div>
        );
    }
}
