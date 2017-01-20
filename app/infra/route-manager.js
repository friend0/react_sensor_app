import FS from 'fs';
import express from 'express';
import React from 'react'
import {renderToString} from 'react-dom/server';
import {match, RoutingContext} from 'react-router';

import baseManager from './base-manager';
import routes from '../routes/routes';
import mongoose from 'mongoose';

const bodyParser = require('body-parser');
const methodOverride = require('method-override');


class AugmentedRoutingContext extends RoutingContext {
    createElement(component, props) {
        const context = this.props.context;
        return component == null ? null : this.props.createElement(component, {...props, ...{context}});
    }
};

const routeManager = Object.assign({}, baseManager, {
    configureDevelopmentEnv(app) {
        const apiRouter = this.createApiRouter();
        const pagesRouter = this.createPageRouter();
        app.use('/api', apiRouter);            
        app.use('/', pagesRouter);            
    },

    createPageRouter() {
        const router = express.Router();
        router.use(bodyParser.urlencoded({extended: true}));
        router.use(methodOverride(function(req, res) {
            if (req.body && typeof req.body === 'object' && '_method' in req.body) {
                //  look in urlencoded POST bodies and delete it
                var method = req.body._method;
                delete req.body._method;
                return method;
            }
        }));
        router.get('*', (req, res) => {
            match({routes, location: req.originalUrl}, (err, redirectLocation, renderProps) => {
                this.retrieveLatestBills((err, data) => {
                    if(!err) {
                        const html = this.render(renderProps, data);

                        res.render('index', {
                            content: html,
                            context: data
                        });
                    } else {
                        res.status(500).send();
                    }
                });
            });
        });

        return router;
    },

    createApiRouter(app) {
        const router = express.Router();
        router.use(bodyParser.urlencoded({extended: true}));
        router.use(methodOverride(function(req, res) {
            if (req.body && typeof req.body === 'object' && '_method' in req.body) {
                //  look in urlencoded POST bodies and delete it
                const method = req.body._method;
                delete req.body._method;
                return method;
            }
        }));

        router.get('/latest-bills', (req, res) => {
            console.log("BILL PLAYER");
            this.retrieveLatestBills((err, content) => {
                if(!err) {
                    res.json(JSON.parse(content));
                } else {
                    res.status(500).send();
                }
            });
        });

        router.route('/get-robots')
        //  GET all blobs
            .get(function(req, res, next) {

                // retrieve all blobs from Monogo
                mongoose.model('Robot').find({}, function(err, robots) {
                    if (err) {
                        return console.error(err);
                    } else {
                        // respond to both HTML and JSON. JSON responses require
                        // 'Accept: application/json;' in the Request Header
                        var robots = (robots);
                        res.format({
                            // HTML response will render the index.jade file in the views/blobs folder.
                            // We are also setting "blobs" to be an accessible variable in our jade view
                            html: function() {
                                res.render('robots/index', {
                                    title: 'BIW Robots',
                                    robots: robots
                                });
                            },
                            // JSON response will show all blobs in JSON format
                            json: function() {
                                res.json(robots);
                            }
                        });
                    }
                });
            })
            // POST a new blob
            .post(function(req, res) {
                //  Get values from POST request. These can be done through forms or
                // REST calls. These rely on the "name" attributes for forms
                const hostname = req.body.name;
                const opc = req.body.isloved;
                // call the create function for our database
                mongoose.model('Robot').create({
                    hostname: hostname,
                    opc: opc
                }, function(err, robot) {
                    if (err) {
                        res.send('There was a problem adding the information to the database.');
                    } else {
                        // Blob has been created
                        console.log('POST creating new blob: ' + robot);
                        res.format({
                            // HTML response will set the location and redirect back to the home page.
                            // You could also create a 'success' page if that's your thing
                            html: function() {
                                //  If it worked, set the header so the address bar doesn't
                                // still say /adduser
                                res.location('robot');
                                //  And forward to success page
                                res.redirect('/robots');
                            },
                            // JSON response will show the newly created blob
                            json: function() {
                                res.json(robot);
                            }
                        });
                    }
                });
            });

        // Make a new Robot
        router.get('/new', function(req, res) {
            res.render('robots/new', {title: 'Add New Robot'});
        });

        router.get('/mongo', (req, res) => {
            console.log("MONGO PLAYER");
            this.retrieveLatestBills((err, content) => {
                if(!err) {
                    res.json(JSON.parse(content));
                } else {
                    res.status(500).send();
                }
            });
        });

        //  route middleware to validate :id
        router.param('id', function(req, res, next, id) {
            // console.log('validating ' + id + ' exists');
            // find the ID in the Database
            console.log("TWERKING")
            mongoose.model('Robot').findById(id, function(err, robot) {
                // if it isn't found, we are going to repond with 404
                if (err) {
                    console.log(id + ' was not found');
                    res.status(404);
                    let err = new Error('Not Found');
                    err.status = 404;
                    res.format({
                        html: function() {
                            next(err);
                        },
                        json: function() {
                            res.json({message: err.status + ' ' + err});
                        }
                    });
                    // if it is found we continue on
                } else {
                    // uncomment if you want to see JSON document response for every GET/PUT/DELETE
                    // console.log(blob);
                    //  once validation is done save the new item in the req
                    req.id = id;
                    //  go to the next thing
                    next();
                }
            });
        });

        // GET the individual blob by Mongo ID
        router.route('/:id/edit').get(function(req, res) {
                // search for the blob within
            console.log('ID EDIT');
            mongoose.model('Robot').findById(req.id, function(err, robot) {
                if (err) {
                    console.log('GET Error: There was a problem retrieving: ' + err);
                } else {
                    // Return the blob
                    console.log('GET Retrieving ID: ' + robot._id);
                    const robot_hostname = robot.hostname.toISOString();
                    res.format({
                        // HTML response will render the 'edit.jade' template
                        html: function() {
                            res.render('blobs/edit', {
                                title: 'Blob' + robot._id,
                                'hostname': robot_hostname,
                                'robot': robot
                            });
                        },
                        // JSON response will return the JSON output
                        json: function() {
                            res.json(robot);
                        }
                    });
                }
            });
            })
            // PUT to update a blob by ID
            .put(function(req, res) {
                //  Get our REST or form values. These rely on the "name" attributes
                const hostname = req.body.name;
                const opc = req.body.isloved;

                // find the document by ID
                mongoose.model('Robot').findById(req.id, function(err, robot) {
                    // update it
                    robot.update({
                        hostname: hostname,
                        opc: opc
                    }, function(err, robotID) {
                        if (err) {
                            res.send('There was a problem updating ' +
                                'the information to the database: ' + err);
                        }
                        else {
                            res.format({
                                html: function() {
                                    res.redirect('/blobs/' + robot._id);
                                },
                                // JSON responds showing the updated values
                                json: function() {
                                    res.json(robot);
                                }
                            });
                        }
                    });
                });
            })
            // DELETE a Blob by ID
            .delete(function(req, res) {
                // find blob by ID
                mongoose.model('Robot').findById(req.id, function(err, robot) {
                    if (err) {
                        return console.error(err);
                    } else {
                        // remove it from Mongo
                        robot.remove(function(err, blob) {
                            if (err) {
                                return console.error(err);
                            } else {
                                // Returning success messages saying it was deleted
                                console.log('DELETE removing ID: ' + robot._id);
                                res.format({
                                    // HTML returns us back to the main page, or you can create a
                                    // success page
                                    html: function() {
                                        res.redirect('/blobs');
                                    },
                                    // JSON returns the item with the message that is has been deleted
                                    json: function() {
                                        res.json({
                                            message: 'deleted',
                                            item: robot
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            });
        return router;
    },

    retrieveLatestBills(callback) {
        FS.readFile('./app/fixtures/latest-bills.json', 'utf-8', callback);
    },

    render(renderProps, data) {
        const additionalProps = {context: JSON.parse(data)};
        const html = renderToString(
            <AugmentedRoutingContext {...renderProps} {...additionalProps}/>
        );

        return html;
    }
});

export default routeManager;