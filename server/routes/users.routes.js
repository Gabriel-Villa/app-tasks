const { Router } = require('express');
const router = Router();
const { loginPage, registerPage } = require('../controllers/users.controller');

router.get('/login', loginPage);


router.get('/register', registerPage);

module.exports = router;