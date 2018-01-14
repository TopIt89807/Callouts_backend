const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    email           : { type: String, isRequired: true, unique: true},
    hashed_password : { type: String, isRequired: true},
    user_type       : { type: Number, isRequired: true, default: 1},
});

module.exports = mongoose.model('users', UsersSchema);