const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    email: String,
    hashed_password: String,
    user_type: Number,
});

module.exports = mongoose.model('users', UsersSchema);