const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
 

	username : String,
	gender : Boolean,
	dob : Date, // date de naissance
	news : Boolean,
	email : String,
	photo : String,
  	timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;