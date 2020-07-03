var express = require('express');
var router = express.Router();

/* GET challenge data. */
router.get('/', function(req, res, next) {
  res.send({
      nombre: "Carlos Valdez",
      twitter: "Kenar716",
      website: "www.codingfriki.com",
      aboutMe: "Star Wars Friki, Otaku Weabo, Developer and aspiring AppSec"
  });
});

module.exports = router;
