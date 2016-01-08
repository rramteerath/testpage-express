// User model

var mongoose = require('mongoose');

// The function 'callback' is passed in and invoked with the results of thedb call.
exports.userlist = function userlist(callback){
	var User = mongoose.model('User');
	User.find(function(err, users){
		if (err){
			consolde.log(err);
		}
		else{
			console.log(users);
			callback("",users);
		}
	}) // End User.find
} //End exports.userlist

// Model
// The function 'callback' is passed in and invoked with the results of the db call.
exports.searchresults = function searchresults(searchTerm, callback){
	console.log(searchTerm);

	var User = mongoose.model('User');

	// Use a regular expression to find items that include the search term in userName
	// Option 'i': case insensitive
	User.find({userName: {$regex: searchTerm, $options:'i'}}, function(err, users){
		if (err){
			consolde.log(err);
		}
		else{
			console.log(users);
			callback("",users);
		}
	}) // End User.find
} //End exports.userlist

exports.findbyid = function findbyid(id, callback){
	console.log(id);

	var User = mongoose.model('User');

	// Use a regular expression to find items that include the search term in userName
	// Option 'i': case insensitive
	User.find({_id: id}, function(err, users){
		if (err){
			console.log(err);
		}
		else{
			console.log(users);
			if (users == null)
				callback("",users);
			else
				callback("", users[0]);
		}
	}) // End User.find
} //End exports.userlist

exports.saveUserById = function saveUserById(userData, callback){

	var User = mongoose.model('User');

	// Lookup save syntax -- http://stackoverflow.com/questions/5024787/update-model-with-mongoose-express-nodejs?rq=1
	// Do I have to do a find before saving, I already have a fully populated model (in userData).
	// I guess you should just to verify that the record is still there.
	User.findById(userData._id, function(err, dbUser){
		if (err){
			console.log(err);
		}
		else {
			dbUser.userName = userData.userName;
			dbUser.email = userData.email;
			dbUser.login = userData.login;

			// Save
			dbUser.save(function(err){
				if (err)
					console.log(err);
				else {
					console.log('Saved');
					callback("", dbUser);
				}
			});
		}
		
	});

	// User.find({_id: id}, function(err, users){
	// 	if (err){
	// 		console.log(err);
	// 	}
	// 	else{
	// 		console.log(users);
	// 		if (users == null)
	// 			callback("",users);
	// 		else
	// 			callback("", users[0]);
	// 	}
	// }) // End User.find
} //End exports.userlist