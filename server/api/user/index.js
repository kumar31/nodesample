'use strict';
var express = require('express')
var router = express.Router()
var controller = require('./controller.js')

router.get('/getUsers', controller.getUsers);
router.post('/create', controller.create);
router.put('/update', controller.update);
router.delete('/delete',controller.delete);

module.exports = router;