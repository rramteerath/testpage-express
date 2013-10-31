
/*
 * GET home page.
 */

 // Team route - index page
var teamdata = require('../model/teams');

exports.index = function(req, res){
	var strGroup = "D";
	teamdata.teamlist(strGroup, function(err, teamlist){
		res.render('index', { 
			title: 'Test web page on node.js using Express and Mongoose',
			pagetitle: 'Hello Express',
			group: strGroup,
			teams: teamlist
		});
	});
  
};