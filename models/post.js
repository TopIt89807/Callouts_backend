const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    master_id: Schema.ObjectId,
    text: String,
    image: String,
    thumb_img: String,
    date: Date,
});

module.exports = mongoose.model('post', PostSchema);