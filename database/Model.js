var mongoose = require('./mongoose.js');


var userSchema = new mongoose.Schema({
	Name: String,
	Gender: String,
	Phone: Number,
	BirthDay: Date,
	Residence: String,
	Email: String,
	PersonalWebsite: String,
	ResumeDescription: String,
	GoodSkills: String
});

var userloginSchema = new mongoose.Schema({
	Name: String,
	Password: String,
	Userscm: String
});



var userModel = mongoose.model('user', userSchema);
var userloginModel = mongoose.model('userlogin', userloginSchema);


module.exports = userModel;
module.exports = userloginModel;