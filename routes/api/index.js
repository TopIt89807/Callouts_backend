var express = require('express');
var router = express.Router();

const users = require('./users');
const follow = require('./follow');

router.use('/users', users);
router.use('/follow', follow);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
