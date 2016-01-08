// User Controller
// Controllers are responsible for getting the request data in the correct form
// for the model and sending the proper response.
var userdata = require('../model/userModel');

// The model function userdata.userlist expects as a parameter a callback that takes
// an err and userlist params.
exports.getAllUsers = function userlist(req, res){
	userdata.userlist(function(err, userlist){
		res.json({ users: userlist });
	});
}
