// Team model

var mongoose = require('mongoose');

exports.teamlist = function teamlist(gname, callback){
	var Team = mongoose.model('Team');
	Team.find({'GroupName':gname}, function(err, teams){
		if (err){
			consolde.log(err);
		}
		else{
			console.log(teams);
			callback("",teams);
		}
	}) // End Team.find
} //End exports.teamlist