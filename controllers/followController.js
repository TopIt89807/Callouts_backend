const users = require('../models/users');
const follow = require('../models/follow');

exports.add = (req, res) => {
    if(req.auth) {
        const {follower, following} = req.body;
        follow.find({follower_id: follower, following_id: following})
            .then((results) => {
                if(results.length != 0) {
                    return res.status(409).json({ message: 'Already followed!'});
                }
                users.find({$or: [{_id: follower}, {_id: following}]})
                .then((results) => {
                    if(results.length == 2) {
    
                        const newFollow = new follow({
                            follower_id: follower,
                            following_id: following,
                          });
    
                        newFollow.save();
                        res.status(201).json({ message: 'Follow Action Completed!'});
                
                    }else {
                        res.status(400).json({ message: "Follower and following user must be exist."})
                    }
                })
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    } else {
        res.status(req.status).json({ message: req.message});
    }
}

exports.remove = (req, res) => {
    if(req.auth) {
        const {follower, following} = req.body;
        follow.find({follower_id: follower, following_id: following})
            .then((results) => {
                if(results.length == 0) {
                    res.status(404).json({ message: "Follow Not Found" });
                }else {
                    results[0].remove();
                }
            })
            .then((result) => {
                res.status(200).json("Follow Remove Success!");
                
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    } else {
        res.status(req.status).json({ message: req.message});
    }
}

exports.check = (req, res) => {
    if(req.auth) {
        const {follower, following} = req.body;
        follow.find({follower_id: follower, following_id: following})
            .then((results) => {
                if(results.length == 0)
                    res.status(200).json({ success: false, message: 'Follow Not Found'});
                else
                    res.status(200).json({ success: true, message: 'Follow Exists'});
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    } else {
        res.status(req.status).json({ message: req.message});
    }
}


exports.getFollowings = (req, res) => {
    if(req.auth) {
        const {follower} = req.body;
        follow.find({ follower_id: follower })
            .then((results) => {
                if(results.length == 0)
                    res.status(404).json({ message: 'Following Not Found' });
                else
                    res.status(200).json(results);
            })
            .catch((err) => {
                res.status(400).json(err);
            })
    } else {
        res.status(req.status).json({ message: req.message});
    }
}
