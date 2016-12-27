var express = require('express');
var router = express.Router();
var multiparty = require('multiparty');


/* GET users listing. */
router.options('/', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200')
  res.setHeader('Access-Control-Allow-Headers', 'Cache-Control, X-Requested-With')
  res.json({status: "OK"});
});

router.post('/', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Headers', 'Cache-Control, X-Requested-With');

  var form = new multiparty.Form();

  form.parse(req, (err, fields, files)=> {
    res.json(files.file[0]);
  })

});


module.exports = router;
