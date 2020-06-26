const express = require("express");
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login');
const UserDetailsController = require("../controllers/userDetailsController");

const userController = new UserDetailsController;

 router.post('/login', userController.formLogin);

router.get('/login', userController.loginForm);
router.get('/', connectEnsureLogin.ensureLoggedIn() , userController.index)

router.get('/private', connectEnsureLogin.ensureLoggedIn(), userController.private)
router.get('/user', connectEnsureLogin.ensureLoggedIn(),userController.user)


router.get('/logout', userController.logout)

module.exports =router;