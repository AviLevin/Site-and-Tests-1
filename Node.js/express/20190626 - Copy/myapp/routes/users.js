var express = require('express');
var router = express.Router();
var UsersController = require('../controllers/UsersController');

/* GET users listing. */
router.get('/login', UsersController.getLoginPage);

/* GET users listing. */
router.post('/login', function (req, res, next) {
    res.send('login with a resource');
});

/* GET users listing. */
router.get('/register', UsersController.getRegisterPage);

/* GET users listing. */
router.post('/register', UsersController.createUser);


module.exports = router;
