var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sign_in');
});

router.post('/sign_in/submit', function(req,res){
  var models = require('../models/');
  var sign = new models.User({"name": name,
                            "email":email,
                            "password":password});
  sign.save();
})

module.exports = router;
