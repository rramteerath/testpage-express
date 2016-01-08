
/*
 * Find users based on input.
 */

// Edit route

var userdata = require('../model/userModel');
var mongoose = require('mongoose');

exports.getrecord = function(req, res){
	var id = req.query.id;
	var postId = req.body.userId;
	
	// If the body userNAme field is not null, this is a post.
	// Save the data back to the db.
	if (postId != null)	{
		// Get data from form
		var User = mongoose.model('User');
		User._id = postId;
		User.userName = req.body.userName;
		User.login = req.body.login;
		User.email = req.body.email;

		// console.log(User.userName);
		// console.log(User.login);
		// console.log(User.email);

		//Save to db
		userdata.saveUserById(User, function(err, user){
			res.render('edit', { 
				title: 'Edit User',
				pagetitle: 'User saved',
				user: user
			});
		});
	}
	else {
		userdata.findbyid(id, function(err, user){
			res.render('edit', { 
				title: 'Edit User',
				pagetitle: 'Editing user: ' + user.userName,
				user: user
			});
		});
	}
};