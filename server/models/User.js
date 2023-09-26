const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {type: String, required: true, min: 6, unique: true},
  password: {type: String, required: true, min: 8}
})

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel;