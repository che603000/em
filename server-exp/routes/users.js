var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  //res.setHeader('Access-Control-Allow-Headers', 'Cache-Control, X-Requested-With')
  res.json({status: "OK"});
});

module.exports = router;
