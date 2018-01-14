const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    master_id   : { type: mongoose.Schema.Types.ObjectId, isRequired: true, ref: 'users' },
    text        : { type: String},
    image       : { type: String},
    thumb_img   : { type: String},
    created_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('post', PostSchema);