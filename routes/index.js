var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/sign_in', function(req, res, next){
  res.render('sign_in');
});

module.exports = router;
