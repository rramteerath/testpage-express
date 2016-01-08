
/**
 * Module dependencies.
 */

var express = require('express');
var db = require('./model/db');
var routes = require('./routes');
var userRoute = require('./routes/userRoute');
var find = require('./routes/find');
var edit = require('./routes/edit');
var birds = require('./routes/birds');
var birds2 = require('./routes/birds2');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 9001;

var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

app.use('/api/birds', birds);
app.use('/api/birds2', birds2);
app.use('/api/users', userRoute);

app.listen(port);
console.log('Express server listening on port ' + port);
