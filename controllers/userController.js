// User Controller
// Controllers are responsible for getting the request data in the correct form
// for the model and sending the proper response.
var mongoose = require('mongoose');
var userdata = require('../model/userModel');

// The model function userdata.userlist expects as a parameter a callback that takes
// an err and userlist params.
exports.getAllUsers = function userlist(req, res){
	userdata.userlist(function(err, userlist){
		res.json({ users: userlist });
	});
}

exports.findByUserName = function findByUserName(req, res) {
	var searchTerm = req.params.username;
	if (searchTerm == null || searchTerm == '') {
		res.json({ users: null });
	}
	else {
		userdata.searchresults(searchTerm, function(err, userlist){
			res.json( { users: userlist });
		});
	}
}

exports.updateUserById = function updateUserById(req, res) {
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
}

