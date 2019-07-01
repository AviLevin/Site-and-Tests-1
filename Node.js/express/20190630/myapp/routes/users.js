var express = require('express');
var router = express.Router();
var UsersController = require('../controllers/UsersController');

/* GET users listing. */
router.get('/login', UsersController.getLoginPage);

/* GET users listing. */
router.post('/login', UsersController.checkUser);

router.get('/logout', UsersController.logoutUser);


/* GET users listing. */
router.get('/register', UsersController.getRegisterPage);

/* GET users listing. */
router.post('/register', UsersController.createUser);


module.exports = router;
