import express from 'express';
import nconf from 'nconf';
import configManager from './infra/config-manager';
import middlewareManager from './infra/middleware-manager';
import routeManager from './infra/route-manager';
import assetsManager from './infra/assets-manager';
import mongoose from 'mongoose';

const app = express();
const url = 'mongodb://rowdy_rye:rowdy_rye@ds161038.mlab.com:61038/sensor_lake';


configManager.handle(app);
middlewareManager.handle(app);
assetsManager.handle(app);
routeManager.handle(app);

configManager.handle(app);
middlewareManager.handle(app);
assetsManager.handle(app);
routeManager.handle(app);
console.log('FUCK!!');

mongoose.connect(url, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('Connected to db.');
    app.listen(nconf.get('port'), () => {
        console.log('Listening on http://' + nconf.get('host') + ':' + nconf.get('port'));
    });
});


