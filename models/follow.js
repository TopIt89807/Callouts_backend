const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FollowSchema = new Schema({
    follower_id  : { type: mongoose.Schema.Types.ObjectId, isRequired: true, ref: 'users' },
    following_id : { type: mongoose.Schema.Types.ObjectId, isRequired: true, ref: 'users' },
});

module.exports = mongoose.model('follow', FollowSchema);
