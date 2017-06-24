'use strict';
var express = require('express');
var router = express.Router();
//var controller = require('./controller.js');
var controller = require('./modifiedcontroller.js');

router.post('/createuser', controller.createuser);
router.get('/getuser', controller.getuser);
router.post('/updateuser', controller.updateuser);
router.delete('/deleteuser', controller.deleteuser);

module.exports = router;