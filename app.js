
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

// all environments
app.set('port', process.env.PORT || 3002);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//app.use(express.favicon());
//app.use(express.logger('dev'));
//app.use(express.bodyParser());
//app.use(express.methodOverride());
//app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// development only
// if ('development' == app.get('env')) {
//   app.use(express.errorHandler());
// }

//app.get('/', routes.index);

// router.get('/', function(req, res) {
//     res.json({ message: 'hooray! welcome to our api!' });   
// });

app.use('/api/birds', birds);
app.use('/api/birds2', birds2);
app.use('/api/users', userRoute);


// router.get('/users', user.userlist);

// app.use('/api', router);

// Execute the userlist function in the route folder, user.js file.
//app.get('/users', user.userlist);

// Will be doing both gets and posts to find page 
// app.get('/find', find.searchresults);
// app.post('/find', find.searchresults);
// app.get('/edit', edit.getrecord);
// app.post('/edit', edit.getrecord);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
