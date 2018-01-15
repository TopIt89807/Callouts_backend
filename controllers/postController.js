const user = require('../models/users');
const post = require('../models/post');

exports.add = (req, res) => {
    if(req.auth) {
        const {master_id, text, image, thumb_img} = req.body;
        if(!master_id)
            res.status(404).json({ message: 'Master User Not Found!' });
        else {
            newPost.save();
            res.status(200).json({ message: 'New Post Added!' });
        }
    } else {
        res.status(req.status).json({ message: req.message});
    }
}

exports.update = (req, res) => {
    if(req.auth) {
        const {id, master_id, text, image, thumb_img} = req.body;
        if(!master_id)
            res.status(404).json({ message: 'Master User Not Found!' });
        else {
            post.find({ _id: id })
                .then((results) => {
                    if(results.length != 0) {
                        const post = results[0];
                        post.master_id = master_id;
                        post.text = text;
                        post.image = image;
                        post.thumb_img = thumb_img;
                        post.save();
                    } else {
                        res.status(400).json({ message: 'Master User Not Found!'});
                    }
                })
                .then(() => {
                    res.status(200).json({ message: 'Post Updated Successfully!'});
                })
                .catch((err) => {
                    res.status(500).json(err);
                });
        }
    } else {
        res.status(req.status).json({ message: req.message});
    }
}

exports.delete = (req, res) => {
    if(req.auth) {
        const {id} = req.body;
        if(!id)
            res.status(400).json({ message: 'Invalid Post!'});
        else {
            post.find({ _id: id})
                .then((results) => {
                    if(results.length == 0)
                      res.status(404).json({ message: 'No Post!' });
                    else {
                        results[0].remove();
                        res.status(200).json({ message: 'Post Deleted'});
                    }
                })
                .catch((err) => {
                    res.status(500).json(err);
                })
        }
    } else {
        res.status(req.status).json({ message: req.message});
    }
}

exports.getPosts = (req, res) => {
    if(req.auth) {
        const {master_id} = req.body;
        if(!master_id)
            res.status(400).json({ message: 'Invalid Master User!'});
        else {
            post.find({ master_id: master_id})
                .then((results) => {
                    if(results.length == 0)
                      res.status(404).json({ message: 'No Posts' });
                    else {
                        res.status(200).json(results);
                    }
                })
                .catch((err) => {
                    res.status(500).json(err);
                })
        }
    } else {
        res.status(req.status).json({ message: req.message});
    }
}