import React from 'react';
import {Router} from 'react-router';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import routes from './routes';

process.APP_STATE = window.APP_STATE || {};



class AppRoutes extends React.Component {
    render() {
        return (
            <Router routes={routes}
                    onUpdate={() => window.scrollTo(0, 0)}/>
        );
    }
}

console.log('SHIT!!!');
process.APP_STATE = window.APP_STATE || {};
window.onload = () => {
    ReactDOM.render(<AppRoutes history={browserHistory}/>, document.getElementById('root'));
};
