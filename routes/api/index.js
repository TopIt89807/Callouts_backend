var express = require('express');
var router = express.Router();

const users = require('./users');
const follow = require('./follow');
const post = require('./post');

router.use('/users', users);
router.use('/follow', follow);
router.use('/post', post);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
