
/*
 * GET users listing.
 */

// User route
// Routes are responsible for getting the request to the correct controller

var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var userdata = require('../model/userModel');
var userCtrl = require('../controllers/userController')

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// get all users
router.get('/', function(req, res) {
	userCtrl.getAllUsers(req, res);
});

// router.get('/', function(req, res) {
//   userdata.userlist(function(err, userlist){
// 		res.json({ users: userlist });
// 	});
// });

// find user by username
router.route('/:username')
	.get(function(req, res) {
	  	var searchTerm = req.params.username;
		if (searchTerm == null || searchTerm == '') {
			res.json({ users: null });
		}
		else {
			userdata.searchresults(searchTerm, function(err, userlist){
				res.json( { users: userlist });
			});
		}
	})

	.put(function(req, res) {
		var id = req.params.username; // using same route param for username and id - not right, fix later

		// Get data from form
		var User = mongoose.model('User');
		User._id = id;
		User.userName = req.body.userName;
		User.login = req.body.login;
		User.email = req.body.email;

		// console.log(req.body);
		// console.log(User.userName);
		// console.log(User.login);
		// console.log(User.email);

		//Save to db
		userdata.saveUserById(User, function(err, user){
			res.json( { user: user });
		});
	});


module.exports = router;

