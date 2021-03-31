const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  username: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: Date, required: true },
  news: { type: Boolean, required: true },
  email: { type: String, required: true },
  photo: { type: String, required: true },
  
}, {
  timestamps: true,
});

const User = mongoose.model('User', usersSchema);

module.exports = User;