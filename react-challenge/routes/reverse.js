var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var revstr = req.param('toReverse')
	revstr=revstr.split("").reverse().join("");
  res.send(revstr);

  // And insert something like this instead:

});

module.exports = router;
