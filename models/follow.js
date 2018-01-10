const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FollowSchema = new Schema({
    follower_id: Schema.ObjectId,
    following_id: Schema.ObjectId,
});