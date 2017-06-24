'use strict';
var express = require('express');
var router = express.Router()
var auth = require('./api/auth');
var user = require('./api/user');


router.use('/auth' ,auth);
router.use('/user',user);

module.exports = router