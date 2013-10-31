var mongoose = require('mongoose');

var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var teamSchema = new mongoose.Schema({
	country: String,
	GroupName: String
});

var userSchema = new Schema({
	_id: ObjectId,
	userName: String,
	login: String,
	email: String
});

mongoose.model('Team', teamSchema);
mongoose.model('User', userSchema);
mongoose.connect('mongodb://localhost/euro2012');
