<<<<<<< HEAD
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
=======
var express = require("express");
var router = express.Router();
var user = require("../models/user");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
>>>>>>> 9972ff7007d2f6ebbf5061a243e1ec903618efe4
});

module.exports = router;
