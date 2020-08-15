const { Router } = require('express');
const router = Router();
const { indexPage } = require('../controllers/index.controller');


router.get('/', indexPage )

module.exports = router;