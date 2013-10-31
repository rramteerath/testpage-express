
/*
 * Find users based on input.
 */

// Find route

var userdata = require('../model/users');

exports.searchresults = function(req, res){

	// If this is a post and there are valid params, search the db.
	// Else just display the page.
	var searchTerm = req.body.searchterm;
	if (searchTerm == null || searchTerm == '') {
		res.render('find', { 
			title: 'Find Users',
			pagetitle: 'Enter search term',
			users: null
		});
	}
	else {
		userdata.searchresults(searchTerm, function(err, userlist){
			res.render('find', { 
				title: 'Find Users',
				pagetitle: 'Users found during search',
				users: userlist
			});
		});
	}
  
};