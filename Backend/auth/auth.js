var express = require('express');
var router = express.Router();

// Login route
router.get('/login', function(req, res, next) {
  res.render('login');
});

// Registration route
router.get('/register', function(req, res, next) {
  res.render('register');
});

module.exports = router;

