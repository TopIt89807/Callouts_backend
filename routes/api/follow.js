var express = require('express');
var router = express.Router();
var follow_controller = require('../../controllers/followController');

router.post('/add', follow_controller.add);
router.delete('/remove', follow_controller.remove);
router.post('/check_exist', follow_controller.check);
router.post('/get_followings', follow_controller.getFollowings);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
