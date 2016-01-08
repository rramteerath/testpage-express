
/*
 * GET users listing.
 */

// User route
// Routes are responsible for getting the request to the correct controller

var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/userController')

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('In userRoute');
  next();
});

// get all users
router.get('/', function(req, res) {
	userCtrl.getAllUsers(req, res);
});


router.route('/:username')
	// find user by username
	.get(function(req, res) {
		userCtrl.findByUserName(req, res);
	})

	// Update user by id
	.put(function(req, res) {
		userCtrl.updateUserById(req, res);
	});


module.exports = router;
