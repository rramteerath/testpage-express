
/*
 * GET users listing.
 */

// User route

var userdata = require('../model/users');

exports.userlist = function(req, res){
	// Call the userlist function in the user model and pass it a function
	// that takes err and userlist params. This will be called in the user
	// model once the db results are retrieved.
	userdata.userlist(function(err, userlist){
		res.render('users', { 
			title: 'List of registered users',
			pagetitle: 'Hello Express',
			users: userlist
		});
	});
  
}; 
