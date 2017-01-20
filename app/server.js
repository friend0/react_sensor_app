import express from 'express';
import nconf from 'nconf';
import configManager from './infra/config-manager';
import middlewareManager from './infra/middleware-manager';
import routeManager from './infra/route-manager';
import assetsManager from './infra/assets-manager';
import mongoose from 'mongoose';

const app = express();

configManager.handle(app);
middlewareManager.handle(app);
assetsManager.handle(app);
routeManager.handle(app);

configManager.handle(app);
middlewareManager.handle(app);
assetsManager.handle(app);
routeManager.handle(app);

console.log('Running Server');
// Not used here, but do not remove!!
// todo: refactor db inits to be 'in-line' here
const db = require('./models/db');
const robotSchema = require('./models/robot_schema');

app.listen(nconf.get('port'), () => {
    console.log('Listening on http://' + nconf.get('host') + ':' + nconf.get('port'));
});



