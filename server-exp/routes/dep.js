var express = require('express');
var router = express.Router();
const data =require('../dep-data');


/* GET users listing. */
router.get('/depProcess', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.json(data.process);
});

module.exports = router;
