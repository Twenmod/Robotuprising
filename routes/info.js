var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/info', function(req, res, next) {
  res.render('info.pug', { title: 'Express', data});
});

module.exports = router;
