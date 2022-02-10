var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Welcome on my new Express app!");
});

module.exports = router;
