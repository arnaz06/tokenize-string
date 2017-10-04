var express = require('express');
var router = express.Router();
var filmController = require('../controllers/tokenController')

/* GET users listing. */

router.post('/',filmController.create)

module.exports = router;
