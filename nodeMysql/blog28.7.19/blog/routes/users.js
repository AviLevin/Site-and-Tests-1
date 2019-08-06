var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users');


/* GET users listing. */
router.get('/login', usersController.getLoginForm);
router.post('/login', usersController.checkLogin);

  /* GET users listing. */
router.get('/register', usersController.getRegisterForm);
router.post('/register', usersController.insertUser);

  module.exports = router;
